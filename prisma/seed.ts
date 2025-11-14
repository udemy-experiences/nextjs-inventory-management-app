import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const demoUserId = "133767f0-768d-4338-a612-50c8dc722b84";

  // 🧪 Create sample products
  await prisma.product.createMany({
    data: Array.from({ length: 25 }).map((_, i) => ({
      userId: demoUserId,
      name: `Product ${i + 1}`,
      price: parseFloat((Math.random() * 90 + 10).toFixed(2)), // random price between 10 and 100
      quantity: Math.floor(Math.random() * 20), // random quantity 0–20
      lowStockAt: 5,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i * 5)), // distribute createdAt dates backwards every 5 days
    })),
  });

  console.log("✅ Sample products created successfully!");
}

// 🧩 Run the seed script
main()
  .catch((e) => {
    console.error("❌ Error while seeding:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
