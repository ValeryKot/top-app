'use client';

import axios from "axios";
import {MenuItem} from "@/interfaces/menu.interface";
import {TopPageModel} from '@/interfaces/page.interface';
import {ProductModel} from '@/interfaces/product.interface';
import { useContext } from "react";
import { AppContext } from "@/context/app.context";

export default async function Course({params}: CourseProps) {
  const {menu, setMenu, firstCategory} = useContext(AppContext);

  if (!params) {
    return {
      notFound: true
    };
  }

  const {data: page} = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
  const {data: products} = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
    category: page.category,
    limit: 10,
  });
  // const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
  //   firstCategory
  // });
  // menu.flatMap(m => m.pages.map(p => {`/courses/${p.alias}`;}));

  // console.log(products);
  // console.log(menu);
  return (
    <>
     Prod: {products && products.length}
     Menu: {menu && menu.length}
    </>
  );
}


interface CourseProps extends Record<string, unknown> {
  // firstCategory: number;
  // page: TopPageModel;
  params: {
    alias: string;
    // paths: string[];
    // products: ProductModel[];
  };
}
