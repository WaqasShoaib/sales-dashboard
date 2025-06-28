// data/salesData.ts

export type Sale = {
  year: number
  month: string
  sales: number
}

export const salesData: Sale[] = [
  { year: 2022, month: "Jan", sales: 1000 },
  { year: 2022, month: "Feb", sales: 1200 },
  { year: 2022, month: "Mar", sales: 1500 },
  { year: 2023, month: "Jan", sales: 1700 },
  { year: 2023, month: "Feb", sales: 2000 },
  { year: 2023, month: "Mar", sales: 2100 },
  { year: 2024, month: "Jan", sales: 2200 },
  { year: 2024, month: "Feb", sales: 2300 },
  { year: 2024, month: "Mar", sales: 2500 },
]
