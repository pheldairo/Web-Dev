from django.urls import path
from api.views import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)
from api.views.fbv import products_list as fbv_products_list, product_detail as fbv_product_detail
from api.views.cbv import ProductListAPIView as CBVProductList, ProductDetailAPIView as CBVProductDetail
from api.views.mixins import ProductListAPIView as MixinProductList, ProductDetailAPIView as MixinProductDetail

urlpatterns = [
    # Generics
    path("products/", ProductListAPIView.as_view()),
    path("products/<int:product_id>/", ProductDetailAPIView.as_view()),
    path("categories/", CategoryListAPIView.as_view()),
    path("categories/<int:pk>/", CategoryDetailAPIView.as_view()),
    path("categories/<int:category_id>/products/", CategoryProductsAPIView.as_view()),

    # FBV
    path("fbv/products/", fbv_products_list),
    path("fbv/products/<int:product_id>/", fbv_product_detail),

    # CBV
    path("cbv/products/", CBVProductList.as_view()),
    path("cbv/products/<int:product_id>/", CBVProductDetail.as_view()),

    # Mixins
    path("mixins/products/", MixinProductList.as_view()),
    path("mixins/products/<int:product_id>/", MixinProductDetail.as_view()),
]
