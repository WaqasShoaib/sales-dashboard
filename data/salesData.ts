export type Sale = {
  year: number
  month: string
  sales: number
  region?: string
  category?: string
}

// Enhanced sales data with more realistic figures
export const salesData: Sale[] = [
  // 2022 Data
  { year: 2022, month: "Jan", sales: 45000, region: "North", category: "Electronics" },
  { year: 2022, month: "Feb", sales: 52000, region: "South", category: "Electronics" },
  { year: 2022, month: "Mar", sales: 48000, region: "East", category: "Clothing" },
  { year: 2022, month: "Apr", sales: 61000, region: "West", category: "Electronics" },
  { year: 2022, month: "May", sales: 55000, region: "North", category: "Books" },
  { year: 2022, month: "Jun", sales: 67000, region: "South", category: "Electronics" },
  { year: 2022, month: "Jul", sales: 71000, region: "East", category: "Clothing" },
  { year: 2022, month: "Aug", sales: 64000, region: "West", category: "Electronics" },
  { year: 2022, month: "Sep", sales: 59000, region: "North", category: "Books" },
  { year: 2022, month: "Oct", sales: 73000, region: "South", category: "Electronics" },
  { year: 2022, month: "Nov", sales: 78000, region: "East", category: "Clothing" },
  { year: 2022, month: "Dec", sales: 85000, region: "West", category: "Electronics" },
  
  // 2023 Data
  { year: 2023, month: "Jan", sales: 51000, region: "North", category: "Electronics" },
  { year: 2023, month: "Feb", sales: 58000, region: "South", category: "Electronics" },
  { year: 2023, month: "Mar", sales: 54000, region: "East", category: "Clothing" },
  { year: 2023, month: "Apr", sales: 67000, region: "West", category: "Electronics" },
  { year: 2023, month: "May", sales: 62000, region: "North", category: "Books" },
  { year: 2023, month: "Jun", sales: 74000, region: "South", category: "Electronics" },
  { year: 2023, month: "Jul", sales: 79000, region: "East", category: "Clothing" },
  { year: 2023, month: "Aug", sales: 72000, region: "West", category: "Electronics" },
  { year: 2023, month: "Sep", sales: 66000, region: "North", category: "Books" },
  { year: 2023, month: "Oct", sales: 81000, region: "South", category: "Electronics" },
  { year: 2023, month: "Nov", sales: 87000, region: "East", category: "Clothing" },
  { year: 2023, month: "Dec", sales: 95000, region: "West", category: "Electronics" },
  
  // 2024 Data
  { year: 2024, month: "Jan", sales: 58000, region: "North", category: "Electronics" },
  { year: 2024, month: "Feb", sales: 65000, region: "South", category: "Electronics" },
  { year: 2024, month: "Mar", sales: 61000, region: "East", category: "Clothing" },
  { year: 2024, month: "Apr", sales: 74000, region: "West", category: "Electronics" },
  { year: 2024, month: "May", sales: 69000, region: "North", category: "Books" },
  { year: 2024, month: "Jun", sales: 82000, region: "South", category: "Electronics" },
  { year: 2024, month: "Jul", sales: 88000, region: "East", category: "Clothing" },
  { year: 2024, month: "Aug", sales: 79000, region: "West", category: "Electronics" },
  { year: 2024, month: "Sep", sales: 73000, region: "North", category: "Books" },
  { year: 2024, month: "Oct", sales: 89000, region: "South", category: "Electronics" },
  { year: 2024, month: "Nov", sales: 96000, region: "East", category: "Clothing" },
  { year: 2024, month: "Dec", sales: 105000, region: "West", category: "Electronics" },
]