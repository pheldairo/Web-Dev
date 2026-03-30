import json
from django.http import JsonResponse
from django.views.decorators.http import require_GET

from .models import Product, Category


def product_to_dict(product):
    return {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category': {
            'id': product.category.id,
            'name': product.category.name,
        },
    }


def category_to_dict(category):
    return {
        'id': category.id,
        'name': category.name,
    }


@require_GET
def product_list(request):
    """GET /api/products/ — list all products."""
    products = Product.objects.select_related('category').all()
    data = [product_to_dict(p) for p in products]
    return JsonResponse(data, safe=False)


@require_GET
def product_detail(request, id):
    """GET /api/products/<id>/ — get one product by ID."""
    try:
        product = Product.objects.select_related('category').get(pk=id)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)
    return JsonResponse(product_to_dict(product))


@require_GET
def category_list(request):
    """GET /api/categories/ — list all categories."""
    categories = Category.objects.all()
    data = [category_to_dict(c) for c in categories]
    return JsonResponse(data, safe=False)


@require_GET
def category_detail(request, id):
    """GET /api/categories/<id>/ — get one category by ID."""
    try:
        category = Category.objects.get(pk=id)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)
    return JsonResponse(category_to_dict(category))


@require_GET
def category_products(request, id):
    """GET /api/categories/<id>/products/ — list products by category."""
    try:
        category = Category.objects.get(pk=id)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)
    products = Product.objects.select_related('category').filter(category=category)
    data = [product_to_dict(p) for p in products]
    return JsonResponse(data, safe=False)
