'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useKpsStore } from '@/features/kps/stores/kpsStore'

interface IndicatorListProps {
  canEdit: boolean
}

export function IndicatorList({ canEdit }: IndicatorListProps) {
  const indicatorDefs = useKpsStore((s) => s.indicatorDefs)
  const addIndicator = useKpsStore((s) => s.addIndicator)
  const updateIndicator = useKpsStore((s) => s.updateIndicator)
  const removeIndicator = useKpsStore((s) => s.removeIndicator)

  const [newName, setNewName] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editName, setEditName] = useState('')

  const handleAdd = () => {
    const trimmed = newName.trim()
    if (!trimmed) return
    addIndicator(trimmed)
    setNewName('')
  }

  const handleStartEdit = (id: string, name: string) => {
    setEditingId(id)
    setEditName(name)
  }

  const handleSaveEdit = (id: string) => {
    const trimmed = editName.trim()
    if (!trimmed) return
    updateIndicator(id, trimmed)
    setEditingId(null)
    setEditName('')
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setEditName('')
  }

  const handleRemove = (id: string) => {
    const def = indicatorDefs.find((d) => d.id === id)
    if (!def) return
    if (window.confirm(`Hapus indikator "${def.name}"?\nTindakan ini tidak bisa dibatalkan.`)) {
      removeIndicator(id)
    }
  }

  return (
    <Card>
      <h2 className="mb-4 text-headline-sm">Indikator KPS</h2>
      <div className="space-y-2">
        {indicatorDefs.map((def) => (
          <div
            key={def.id}
            className="flex items-center justify-between rounded border border-border-subtle bg-surface-container p-3"
          >
            {editingId === def.id ? (
              <div className="flex flex-1 items-center gap-2">
                <span className="text-label-md text-on-surface-variant whitespace-nowrap">
                  {def.id.toUpperCase()}
                </span>
                <Input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="flex-1"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSaveEdit(def.id)
                    if (e.key === 'Escape') handleCancelEdit()
                  }}
                />
                <Button size="sm" onClick={() => handleSaveEdit(def.id)}>
                  Simpan
                </Button>
                <Button size="sm" variant="ghost" onClick={handleCancelEdit}>
                  Batal
                </Button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <span className="text-label-md text-on-surface-variant whitespace-nowrap">
                    {def.id.toUpperCase()}
                  </span>
                  <span className="text-sm">{def.name}</span>
                </div>
                {canEdit && (
                  <div className="flex items-center gap-1">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleStartEdit(def.id, def.name)}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleRemove(def.id)}
                    >
                      Hapus
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      {canEdit && (
        <div className="mt-4 flex items-center gap-2">
          <Input
            placeholder="Nama indikator baru..."
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleAdd()
            }}
            className="flex-1"
          />
          <Button onClick={handleAdd} disabled={!newName.trim()}>
            Tambah
          </Button>
        </div>
      )}
    </Card>
  )
}
