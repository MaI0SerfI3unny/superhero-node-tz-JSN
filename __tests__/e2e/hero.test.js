require("dotenv").config();
const request = require("supertest")
const app = require("../../index")

const newHero = {
  hero: {
    id: 9899898,
    nickname: "Superman",
    real_name: "Clark Kent",
    origin_description: "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
    superpowers: "solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...",
    catch_phrase: "“Look, up in the sky, it's a bird, it's a plane, it's Superman!”",
    Images: ""
  }
}

describe("/api/get/hero", () => {
  test("returns list hero", () => {
    request(app)
      .get("/api/get/hero")
      .expect(200)
  });
});

describe("/api/post/hero", () => {
  test("create new hero", () => {
    request(app)
      .post("/api/post/hero")
      .send(newHero)
      .expect(200)
  })
})

describe("/api/get/hero/:id", () => {
  test("get hero by id", () => {
    request(app)
      .get(`/api/get/hero/${newHero.hero.id}`)
      .expect(200)
  });
});

describe("/api/delete/hero/:id", () => {
  test("delete hero", () => {
    request(app)
      .delete(`/api/delete/hero/${newHero.hero.id}`)
      .expect(200)
  })
})
