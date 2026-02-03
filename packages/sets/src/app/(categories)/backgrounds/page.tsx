"use client"
import apiService from "@/services/apiService"
import { Header } from "@/components/Header"
import { CardInfo } from "@/components/InfoCard"
import { Grid } from "@/components/Grid"

export default function () {
	const api = apiService()
	const data = api.getBackgrounds()

	return (
		<div>
			<Header title="Backgrounds" length={data.length} />

			<Grid>
				{data
					.slice()
					.reverse()
					.map((props) => (
						<CardInfo key={props.label} {...props} />
					))}
			</Grid>
		</div>
	)
}
