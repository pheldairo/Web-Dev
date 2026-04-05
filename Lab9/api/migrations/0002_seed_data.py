from django.db import migrations


CATEGORIES = ["Electronics", "Clothing", "Books", "Home & Garden"]

PRODUCTS = [
    ("Smartphone", 699.99, "Latest flagship smartphone", 50, True, 1),
    ("Laptop", 1199.99, "Powerful ultrabook laptop", 30, True, 1),
    ("Wireless Headphones", 149.99, "Noise-cancelling headphones", 100, True, 1),
    ("Smartwatch", 299.99, "Feature-packed smartwatch", 75, True, 1),
    ("Tablet", 499.99, "10-inch Android tablet", 60, True, 1),
    ("T-Shirt", 19.99, "Classic cotton t-shirt", 200, True, 2),
    ("Jeans", 49.99, "Slim-fit denim jeans", 150, True, 2),
    ("Sneakers", 89.99, "Comfortable running sneakers", 120, True, 2),
    ("Jacket", 129.99, "Lightweight waterproof jacket", 80, True, 2),
    ("Dress", 69.99, "Elegant evening dress", 60, True, 2),
    ("Python Programming", 39.99, "Learn Python from scratch", 300, True, 3),
    ("Clean Code", 34.99, "Writing maintainable software", 250, True, 3),
    ("The Pragmatic Programmer", 44.99, "Career guide for developers", 180, True, 3),
    ("Design Patterns", 49.99, "Gang of Four classic", 140, True, 3),
    ("DDIA", 54.99, "Designing Data-Intensive Applications", 200, True, 3),
    ("Garden Hose", 29.99, "50ft expandable garden hose", 90, True, 4),
    ("Plant Pot Set", 24.99, "Set of 3 ceramic plant pots", 110, True, 4),
    ("LED Desk Lamp", 39.99, "Adjustable brightness LED lamp", 85, True, 4),
    ("Kitchen Knife Set", 79.99, "6-piece stainless steel knife set", 70, True, 4),
    ("Throw Pillow", 19.99, "Decorative living room pillow", 130, True, 4),
]


def seed(apps, schema_editor):
    Category = apps.get_model("api", "Category")
    Product = apps.get_model("api", "Product")

    cats = [Category.objects.create(name=n) for n in CATEGORIES]

    for name, price, desc, count, active, cat_idx in PRODUCTS:
        Product.objects.create(
            name=name, price=price, description=desc,
            count=count, is_active=active, category=cats[cat_idx - 1]
        )


def unseed(apps, schema_editor):
    apps.get_model("api", "Product").objects.all().delete()
    apps.get_model("api", "Category").objects.all().delete()


class Migration(migrations.Migration):
    dependencies = [("api", "0001_initial")]
    operations = [migrations.RunPython(seed, unseed)]
