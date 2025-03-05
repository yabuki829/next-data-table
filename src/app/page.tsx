"use client"
import { DynamicTable } from "@/components/data-table-view";

import Image from "next/image";

export default function Home() {
  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "名前" },
    { key: "age", label: "年齢" },
    { key: "address", label: "住所" },
    { key: "email", label: "メールアドレス" },
    { key: "phone", label: "電話番号" },
    { key: "createdAt", label: "作成日" },
    { key: "updatedAt", label: "更新日" },
    { key: "action", label: "操作" },
    { key: "delete", label: "削除" },
    { key: "edit", label: "編集" },
    { key: "view", label: "詳細" },
    { key: "status", label: "ステータス" },
    { key: "role", label: "ロール" },
    { key: "isActive", label: "アクティブ" },
    { key: "isAdmin", label: "管理者" },
    { key: "isStaff", label: "スタッフ" },
    { key: "premium", label: "プレミアム" },
    { key: "free", label: "フリー" },
    { key: "pro", label: "プロ" },
    { key: "items", label: "持ち物" },
    { key: "favorite", label: "お気に入り" },
    { key: "history", label: "閲覧履歴" },
    { key: "notification", label: "通知" },
    { key: "setting", label: "設定" },
    { key: "logout", label: "ログアウト" },


  ]
  const data = [
    { id: 1, name: "田中太郎", age: 20, address: "東京都千代田区", email: "tanaka@example.com", phone: "090-1234-5678", createdAt: "2021-01-01", updatedAt: "2021-01-01", action: "操作", delete: "削除", edit: "編集", view: "詳細", status: "ステータス", role: "ロール", isActive: "アクティブ", isAdmin: "管理者", isStaff: "スタッフ", premium: "プレミアム", free: "フリー", pro: "プロ", items: "持ち物", favorite: "お気に入り", history: "閲覧履歴", notification: "通知", setting: "設定", logout: "ログアウト" },
    { id: 2, name: "山田次郎", age: 25, address: "東京都千代田区", email: "tanaka@example.com", phone: "090-1234-5678", createdAt: "2021-01-01", updatedAt: "2021-01-01", action: "操作", delete: "削除", edit: "編集", view: "詳細", status: "ステータス", role: "ロール", isActive: "アクティブ", isAdmin: "管理者", isStaff: "スタッフ", premium: "プレミアム", free: "フリー", pro: "プロ", items: "持ち物", favorite: "お気に入り", history: "閲覧履歴", notification: "通知", setting: "設定", logout: "ログアウト" },
    { id: 3, name: "佐藤三郎", age: 30, address: "東京都千代田区", email: "tanaka@example.com", phone: "090-1234-5678", createdAt: "2021-01-01", updatedAt: "2021-01-01", action: "操作", delete: "削除", edit: "編集", view: "詳細", status: "ステータス", role: "ロール", isActive: "アクティブ", isAdmin: "管理者", isStaff: "スタッフ", premium: "プレミアム", free: "フリー", pro: "プロ", items: "持ち物", favorite: "お気に入り", history: "閲覧履歴", notification: "通知", setting: "設定", logout: "ログアウト" },
  ]

  const handleEdit = (id: any) => {
    alert('編集するID:' + id)
  }

  const handleDelete = (id: any) => {
    alert('削除するID:' + id)
  }

  return (
    <div>
      <h1>データテーブルApp</h1>
      <div className="p-4">
        <DynamicTable columns={columns} data={data} onEdit={handleEdit} onDelete={handleDelete} />
      </div>

    </div>
  );
}
