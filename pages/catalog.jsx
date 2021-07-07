import React from "react"
import Layout from "../components/Layout/Layout";
import Catalog from "../src/Catalog/Catalog";

export default function index() {
	return (
		<Layout page='/'>
			<Catalog></Catalog>
		</Layout>
	)
}