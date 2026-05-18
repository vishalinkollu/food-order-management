const request = require("supertest");

const app = require("../server");

describe(
  "Order API", () => {
    test(
      "should reject empty order",
      async () => {
        const response =
          await request(app)
            .post("/api/orders")
            .send({});

        expect(
          response.statusCode
        ).toBe(400);
      }
    );
  }
);