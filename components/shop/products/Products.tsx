"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/dist/client/link";
import Image from "next/image";
import { FC } from "react";
import { Button } from "@/components/common/button";
import { Container } from "@/components/common/container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/common/dropdown";
import { Pagination } from "@/components/common/pagination";
import { Search } from "@/components/common/search";
import { Product as ProductType } from "@/helpers/shop";
import { usePrice } from "@/hooks/common/currency";
import { useFilter } from "@/hooks/common/filter";
import { useAllCategories, useProducts } from "@/hooks/shop";
import { currencyFormatter } from "@/lib/utils";

export const Products: FC = () => {
  const products = useProducts();

  return (
    <section className="py-16 bg-white rounded-2xl">
      <Container className="max-w-7xl space-y-8">
        <div className="max-w-2xl mx-auto space-y-4">
          <Search placeholder={"Search for products"} />
          <ProductsFilter />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.data?.data.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
        {products.data && <Pagination {...products.data.meta} />}
      </Container>
    </section>
  );
};

export const ProductsFilter: FC = () => {
  const categoryFilter = useFilter("category_id");
  const typeFilter = useFilter("type");
  const categories = useAllCategories();
  const selectedCategory = categories.data?.find(
    (cat) => cat.id === categoryFilter.filter,
  );

  return (
    <div
      className={"flex justify-center md:items-center gap-2 md:gap-4 flex-wrap"}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={"bg-[#F5F5F5] text-xs md:text-sm"}
            variant={"ghost"}
          >
            <span className="max-w-28 truncate">
              {selectedCategory?.name || "Category"}
            </span>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={"w-56"}>
          <DropdownMenuItem onSelect={() => categoryFilter.handleFilter("")}>
            All
          </DropdownMenuItem>
          {categories.data?.map((category) => (
            <DropdownMenuItem
              key={category.id}
              onSelect={() => categoryFilter.handleFilter(category.id)}
            >
              {category.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className={"bg-[#F5F5F5] text-xs md:text-sm"}
            variant={"ghost"}
          >
            <span className="capitalize">
              {typeFilter.filterValue || "Type"}
            </span>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={"w-56"}>
          <DropdownMenuItem onSelect={() => typeFilter.handleFilter("")}>
            All
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => typeFilter.handleFilter("physical")}
          >
            Physical
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => typeFilter.handleFilter("digital")}>
            Digital
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export const Product: FC<{ product: ProductType }> = ({ product }) => {
  const price = usePrice(product.price);

  return (
    <div className={"bg-gray-100 p-4 rounded-3xl space-y-3"}>
      <Link href={`/shop/products/${product.id}`} className={"block"}>
        <Image
          className={"block object-cover w-full rounded-3xl h-72"}
          src={product.featured_image}
          alt={product.title}
          width={230}
          height={330}
        />
      </Link>
      <div className="flex justify-between items-center gap-12">
        <div className={"text-[#4E4E4E]"}>
          <Link
            href={`/shop/products/${product.id}`}
            className={"font-bold text-sm md:text-base"}
          >
            {product.title}
          </Link>
          <p className={"text-xs md:text-sm"}>
            {price && currencyFormatter(price?.currency, price?.amount)}
          </p>
        </div>
        <div>
          <ChevronRight className={"text-black size-7"} />
        </div>
      </div>
      <div className="h-[0.09rem] bg-gray-200"></div>
      <div className={"flex gap-1"}>
        <span
          className={
            "bg-[#E0E2FF] text-xs px-3 py-1 rounded-full capitalize text-black"
          }
        >
          {product.type}
        </span>
      </div>
    </div>
  );
};
