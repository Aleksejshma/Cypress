describe("тест bookApp", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("тест логина", () => {
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  });

  it("тест пустого логина", () => {
    cy.login("", "123");
    cy.get("#mail").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
    });
  });

  it("тест пустого пароля", () => {
    cy.login("bropet@mail.ru", "");
    cy.get("#pass").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
    });
  });

  it("тест добавления книги в избранное", () => {
    cy.login("bropet@mail.ru", "123");
    cy.get(".p-0 > .btn").click();
    cy.get("#title").type("Колобок");
    cy.get("#description").type("История о веселом колобке!");
    cy.get("#authors").type("Егор Бобров");
    cy.get("#favorite").click();
    cy.get("form > .ml-2").click();
    cy.get("h4").click();
    cy.contains("Колобок").should("be.visible");
  });

  it("тест скачивания книги из избранного", () => {
    cy.login("bropet@mail.ru", "123");
    cy.get("h4").click();
    cy.get(
      '[href="book/b114f25f-d5d8-4d3f-a5bf-78613cb8418a"] > .h-100 > .card-body'
    ).click();
    cy.contains("Dowload book").should("be.visible");
  });

  it("тест удаления книги из избранного", () => {
    cy.login("bropet@mail.ru", "123");
    cy.get("h4").click();
    cy.get(".card-footer > .btn").click();
    cy.contains("Колобок").should("not.be.visible");
  });
});
