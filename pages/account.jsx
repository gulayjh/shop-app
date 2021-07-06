import React from "react"
import Layout from "../components/Layout/Layout";
import Account from "../src/Account/Account"

export default function index() {
	return (
		<Layout page='/'>
			<Account />
		</Layout>
	)
}