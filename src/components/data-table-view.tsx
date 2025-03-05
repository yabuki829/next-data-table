"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

interface Column {
    key: string
    label: string
}

interface DataRow {
    [key: string]: any
}

interface DynamicTableProps {
    columns: Column[]
    data: DataRow[]
    onEdit: (id: any) => void // 編集ボタンの処理
    onDelete: (id: any) => void // 削除ボタンの処理
}

export const DynamicTable: React.FC<DynamicTableProps> = ({ columns, data, onEdit, onDelete }) => {
    return (
        <div className="overflow-x-auto w-full border-2 border-gray-300 rounded-md">
            <Table className="min-w-full">
                {/* ヘッダー固定 */}
                <TableHeader className="bg-gray-800 sticky top-0 z-10">
                    <TableRow className="text-white">
                        {columns.map((col) => (
                            <TableHead className="text-white" key={col.key}>{col.label}</TableHead>
                        ))}
                        <TableHead className="text-white">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {/* データセル */}
                            {columns.map((col, colIndex) => (
                                <TableCell
                                    key={col.key}
                                    className={colIndex === 0 ? "sticky left-0 bg-white" : ""} // ID列の固定
                                >
                                    {row[col.key]}
                                </TableCell>
                            ))}
                            {/* 最後の列にアクションボタンを追加 */}
                            <TableCell className="text-center">
                                <button
                                    className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
                                    onClick={() => onEdit(row.id)}
                                >
                                    編集ボタン
                                </button>
                                <button
                                    className="px-4 py-2 bg-red-500 text-white rounded"
                                    onClick={() => onDelete(row.id)}
                                >
                                    削除ボタン
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}


