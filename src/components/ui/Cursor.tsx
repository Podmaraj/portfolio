'use client'
import { useCursor } from '@/hooks'

export default function Cursor() {
  useCursor()
  return (
    <>
      <div id="cur" />
      <div id="cur-r" />
    </>
  )
}
