import { ReactNode } from "react";

export interface ILayouts {
    children: ReactNode
    title?: string
}

export interface IBookTrackerList {
    id: string
    userId: string
    title: string
    book: IBookList
    image: string | null
    status: string
    createtime: string
    updatetime: string
    time: number
    progressPage: number
    page: number
}

interface IBookList {
    id: string
    title: string
    author: string
    imageLink: string
    geners: string[]
    year: number
    description: string
    page: number
}