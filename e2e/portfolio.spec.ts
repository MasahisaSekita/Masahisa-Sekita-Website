import { test, expect } from "@playwright/test";

test.describe("Masahisa Sekita Portfolio — End-to-End Suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders page metadata, navbar, and hero section with interactive canvas", async ({
    page,
  }) => {
    await expect(page).toHaveTitle(/Masahisa Sekita — Full-Stack Developer/);

    // Navbar navigation links
    const header = page.locator("header");
    await expect(header).toBeVisible();
    await expect(header.getByRole("link", { name: "Work" })).toHaveAttribute(
      "href",
      "#work"
    );
    await expect(
      header.getByRole("link", { name: "Experience" })
    ).toHaveAttribute("href", "#experience");
    await expect(header.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "#contact"
    );

    // Hero content & canvas vector field
    await expect(
      page.getByRole("heading", {
        name: /Hello, I'm Masahisa\.\s*I'm a fullstack developer\./i,
      })
    ).toBeVisible();
    await expect(
      page.getByText(
        /I build AI-driven automation, high-availability growth systems/i
      )
    ).toBeVisible();
    await expect(page.locator("canvas")).toBeVisible();
  });

  test("renders all 5 selected systems & projects with external links and visual previews", async ({
    page,
  }) => {
    const workSection = page.locator("section#work");
    await expect(workSection).toBeVisible();
    await expect(
      workSection.getByRole("heading", { name: /Selected Systems & Projects/i })
    ).toBeVisible();

    const projectCards = workSection.locator("article");
    await expect(projectCards).toHaveCount(5);

    // Verify Project 01 - Course Matrix
    await expect(
      workSection.getByRole("heading", {
        name: "AI Academic Planner (Course Matrix)",
      })
    ).toBeVisible();

    // Verify Project 02 - Apache Superset
    await expect(
      workSection.getByRole("heading", {
        name: "Apache Superset Dependency Modernization",
      })
    ).toBeVisible();

    // Verify Project 04 - PT. Lajukarsa Global Industri & Thrill Bicycles Platforms + both live links
    await expect(
      workSection.getByRole("heading", {
        name: "PT. Lajukarsa Global Industri & Thrill Bicycles Platforms",
      })
    ).toBeVisible();

    const ptLgiProjectLink = workSection
      .getByRole("link", { name: /PT\. LGI Site/i })
      .first();
    await expect(ptLgiProjectLink).toHaveAttribute(
      "href",
      "https://pt-lgi-website.vercel.app/"
    );

    const thrillProjectLink = workSection
      .getByRole("link", { name: /Thrill Bicycles/i })
      .first();
    await expect(thrillProjectLink).toHaveAttribute(
      "href",
      "https://thrillwheels.com/"
    );
  });

  test("renders engineering principles section with 3 core values", async ({
    page,
  }) => {
    const principlesSection = page.locator("section#principles");
    await expect(principlesSection).toBeVisible();
    await expect(
      principlesSection.getByRole("heading", { name: "Clarity in Architecture" })
    ).toBeVisible();
    await expect(
      principlesSection.getByRole("heading", { name: "Resilience by Design" })
    ).toBeVisible();
    await expect(
      principlesSection.getByRole("heading", {
        name: "Integrity in Data & Security",
      })
    ).toBeVisible();
  });

  test("renders experience & contributions with PT. LGI and Thrill Bicycles links", async ({
    page,
  }) => {
    const expSection = page.locator("section#experience");
    await expect(expSection).toBeVisible();

    const expCards = expSection.locator("article");
    await expect(expCards).toHaveCount(4);

    await expect(
      expSection.getByRole("heading", { name: "YOBOLabs.ai" })
    ).toBeVisible();
    await expect(
      expSection.getByRole("heading", {
        name: "PT. Lajukarsa Global Industri",
      })
    ).toBeVisible();
    await expect(
      expSection.getByRole("heading", {
        name: "Apache Superset (Open Source)",
      })
    ).toBeVisible();

    // Check dual links on PT. Lajukarsa Global Industri experience card
    await expect(
      expSection.getByRole("link", { name: /PT\. LGI Site/i })
    ).toHaveAttribute("href", "https://pt-lgi-website.vercel.app/");
    await expect(
      expSection.getByRole("link", { name: /Thrill Bicycles/i })
    ).toHaveAttribute("href", "https://thrillwheels.com/");
  });

  test("renders technical competencies across all 6 skill categories", async ({
    page,
  }) => {
    const skillsSection = page.locator("section#skills");
    await expect(skillsSection).toBeVisible();

    const expectedCategories = [
      "AI & Automation",
      "Languages",
      "Frameworks & Frontend",
      "Databases & Security",
      "Cloud, DevOps & Testing",
      "Engineering Practices",
    ];

    for (const category of expectedCategories) {
      await expect(
        skillsSection.getByText(category, { exact: true })
      ).toBeVisible();
    }
  });

  test("renders contact section, supports email copy button, and renders footer", async ({
    page,
    context,
    browserName,
  }) => {
    if (browserName === "chromium") {
      await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    }

    const contactSection = page.locator("section#contact");
    await expect(contactSection).toBeVisible();

    const emailLink = contactSection.getByRole("link", {
      name: "masahisasekita@gmail.com",
    });
    await expect(emailLink).toHaveAttribute(
      "href",
      "mailto:masahisasekita@gmail.com"
    );

    // Click copy email button and verify confirmation UI
    const copyButton = contactSection.getByRole("button", {
      name: /Copy Address/i,
    });
    await copyButton.click();
    await expect(
      contactSection.getByText(/Copied to clipboard/i)
    ).toBeVisible();

    // Verify LinkedIn & GitHub links
    await expect(
      contactSection.getByRole("link", { name: /LinkedIn/i })
    ).toHaveAttribute("href", "https://www.linkedin.com/in/masahisa-sekita");
    await expect(
      contactSection.getByRole("link", { name: /GitHub/i })
    ).toHaveAttribute("href", "https://github.com/MasahisaSekita");

    // Footer & Back to Top button
    const footer = page.locator("footer");
    await expect(footer).toContainText("Masahisa Sekita. All rights reserved.");
    await expect(
      footer.getByRole("button", { name: /Back to Top/i })
    ).toBeVisible();
  });
});
