import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions"],
  endpoints: (build) => ({
    getKpis: build.query<void, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),
    // getProducts: build.query<void, void>({
    //   query: () => "product/products/",
    //   providesTags: ["Products"],
    // }),
    // getTransactions: build.query<void, void>({
    //   query: () => "transaction/transactions/",
    //   providesTags: ["Transactions"],
    // }),
  }),
});
