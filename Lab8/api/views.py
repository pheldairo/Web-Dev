import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Product, Category


def product_to_dict(product):
    return {
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "description": product.description,
        "count": product.count,
        "is_active": product.is_active,
        "category_id": product.category_id,
    }


def category_to_dict(category):
    return {
        "id": category.id,
        "name": category.name,
    }


@csrf_exempt
def products_list(request):
    if request.method == "GET":
        products = list(Product.objects.all().values(
            "id", "name", "price", "description", "count", "is_active", "category_id"
        ))
        return JsonResponse(products, safe=False)

    elif request.method == "POST":
        data = json.loads(request.body)
        product = Product.objects.create(
            name=data["name"],
            price=data["price"],
            description=data.get("description", ""),
            count=data.get("count", 0),
            is_active=data.get("is_active", True),
            category_id=data["category_id"],
        )
        return JsonResponse(product_to_dict(product), status=201)

    return JsonResponse({"error": "Method not allowed"}, status=405)


@csrf_exempt
def product_detail(request, id):
    try:
        product = Product.objects.get(pk=id)
    except Product.DoesNotExist:
        return JsonResponse({"error": "Not found"}, status=404)

    if request.method == "GET":
        return JsonResponse(product_to_dict(product))

    elif request.method == "PUT":
        data = json.loads(request.body)
        for field in ("name", "price", "description", "count", "is_active", "category_id"):
            if field in data:
                setattr(product, field, data[field])
        product.save()
        return JsonResponse(product_to_dict(product))

    elif request.method == "DELETE":
        product.delete()
        return JsonResponse({"message": "Deleted"}, status=204)

    return JsonResponse({"error": "Method not allowed"}, status=405)


@csrf_exempt
def categories_list(request):
    if request.method == "GET":
        categories = list(Category.objects.all().values("id", "name"))
        return JsonResponse(categories, safe=False)

    elif request.method == "POST":
        data = json.loads(request.body)
        category = Category.objects.create(name=data["name"])
        return JsonResponse(category_to_dict(category), status=201)

    return JsonResponse({"error": "Method not allowed"}, status=405)


@csrf_exempt
def category_detail(request, id):
    try:
        category = Category.objects.get(pk=id)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Not found"}, status=404)

    if request.method == "GET":
        return JsonResponse(category_to_dict(category))

    elif request.method == "PUT":
        data = json.loads(request.body)
        category.name = data.get("name", category.name)
        category.save()
        return JsonResponse(category_to_dict(category))

    elif request.method == "DELETE":
        category.delete()
        return JsonResponse({"message": "Deleted"}, status=204)

    return JsonResponse({"error": "Method not allowed"}, status=405)


def category_products(request, id):
    try:
        category = Category.objects.get(pk=id)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Not found"}, status=404)

    products = list(category.products.all().values(
        "id", "name", "price", "description", "count", "is_active", "category_id"
    ))
    return JsonResponse(products, safe=False)
