import "./globals.css"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import MainLayout from "@/layouts/MainLayout"
import { ReactNode } from "react"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"]
})

export const metadata: Metadata = {
	title: "Sets",
	description:
		"A curated platform that aggregates links to the best free resources for developers and digital artists — icons, photos, illustrations, fonts, blogs, and more."
}

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang="en" data-scroll-behavior="smooth">
			<body className={`${geistSans.variable}`}>
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	)
}
