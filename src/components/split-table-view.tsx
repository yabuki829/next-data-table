"use client"

import { useRef, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"


const data = [
    {
        id: "1",
        name: "John Doe",
        department: "Engineering",
        role: "Frontend Developer",
        email: "john.doe@example.com",
        status: "Active",
        joinDate: "2021-01-15",
        salary: "$85,000",
        location: "New York",
        manager: "Sarah Johnson",
        projects: "Dashboard, API Integration",
    },
    {
        id: "2",
        name: "Jane Smith",
        department: "Design",
        role: "UI/UX Designer",
        email: "jane.smith@example.com",
        status: "Active",
        joinDate: "2020-03-22",
        salary: "$78,000",
        location: "San Francisco",
        manager: "Mike Peterson",
        projects: "Mobile App, Website Redesign",
    },
    {
        id: "3",
        name: "Robert Johnson",
        department: "Marketing",
        role: "Marketing Specialist",
        email: "robert.johnson@example.com",
        status: "On Leave",
        joinDate: "2019-11-05",
        salary: "$72,000",
        location: "Chicago",
        manager: "Lisa Wang",
        projects: "SEO Campaign, Social Media Strategy",
    },
    {
        id: "4",
        name: "Emily Davis",
        department: "Engineering",
        role: "Backend Developer",
        email: "emily.davis@example.com",
        status: "Active",
        joinDate: "2022-02-10",
        salary: "$92,000",
        location: "Boston",
        manager: "Sarah Johnson",
        projects: "Database Migration, API Development",
    },
    {
        id: "5",
        name: "Michael Wilson",
        department: "Sales",
        role: "Sales Representative",
        email: "michael.wilson@example.com",
        status: "Active",
        joinDate: "2020-07-18",
        salary: "$68,000",
        location: "Los Angeles",
        manager: "David Brown",
        projects: "Client Acquisition, Sales Training",
    },
    {
        id: "6",
        name: "Sophia Lee",
        department: "HR",
        role: "HR Specialist",
        email: "sophia.lee@example.com",
        status: "Active",
        joinDate: "2021-05-03",
        salary: "$65,000",
        location: "Seattle",
        manager: "Jennifer Adams",
        projects: "Recruitment, Employee Onboarding",
    },
]

export default function SplitTable() {

    const fixedTableRef = useRef<HTMLDivElement>(null)
    const scrollableTableRef = useRef<HTMLDivElement>(null)

    // テーブルのスクロールを同期する
    useEffect(() => {
        const fixedTable = fixedTableRef.current
        const scrollableTable = scrollableTableRef.current

        if (!fixedTable || !scrollableTable) return

        const handleFixedScroll = () => {
            if (scrollableTable) {
                scrollableTable.scrollTop = fixedTable.scrollTop
            }
        }

        const handleScrollableScroll = () => {
            if (fixedTable) {
                fixedTable.scrollTop = scrollableTable.scrollTop
            }
        }

        fixedTable.addEventListener("scroll", handleFixedScroll)
        scrollableTable.addEventListener("scroll", handleScrollableScroll)

        return () => {
            fixedTable.removeEventListener("scroll", handleFixedScroll)
            scrollableTable.removeEventListener("scroll", handleScrollableScroll)
        }
    }, [])

    return (
        <div className="w-full p-4">
            <div className="flex border rounded-md">
                <div
                    ref={fixedTableRef}
                    className="overflow-y-auto max-h-[100px] border-r shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]"
                    style={{ zIndex: 10 }}
                >
                    <Table>
                        <TableHeader className="">
                            <TableRow className="bg-background">
                                <TableHead className=" whitespace-nowrap">ID</TableHead>
                                <TableHead className=" whitespace-nowrap">名前</TableHead>
                                <TableHead className="w-[100px] whitespace-nowrap">部署</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow key={`fixed-${row.id}`}>
                                    <TableCell className="whitespace-nowrap">{row.id}</TableCell>
                                    <TableCell className="whitespace-nowrap">{row.name}</TableCell>
                                    <TableCell className="whitespace-nowrap">{row.department}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div
                    ref={scrollableTableRef}
                    className="overflow-auto max-h-[100px]"
                >
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-background">
                                <TableHead className="whitespace-nowrap min-w-[150px]">役職</TableHead>
                                <TableHead className="whitespace-nowrap min-w-[200px]">メールアドレス</TableHead>
                                <TableHead className="whitespace-nowrap min-w-[100px]">ステータス</TableHead>
                                <TableHead className="whitespace-nowrap min-w-[120px]">入社日</TableHead>
                                <TableHead className="whitespace-nowrap min-w-[100px]">給与</TableHead>
                                <TableHead className="whitespace-nowrap min-w-[150px]">勤務地</TableHead>
                                <TableHead className="whitespace-nowrap min-w-[150px]">マネージャー</TableHead>
                                <TableHead className="whitespace-nowrap min-w-[200px]">プロジェクト</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow key={`scroll-${row.id}`}>
                                    <TableCell>{row.role}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                                            {row.status}
                                        </span>
                                    </TableCell>
                                    <TableCell>{row.joinDate}</TableCell>
                                    <TableCell>{row.salary}</TableCell>
                                    <TableCell>{row.location}</TableCell>
                                    <TableCell>{row.manager}</TableCell>
                                    <TableCell>{row.projects}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

        </div>
    )
}

