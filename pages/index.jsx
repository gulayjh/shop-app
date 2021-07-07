import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import MainPage from '../src/MainPage/MainPage'
import axios from "axios"
import { setUserToken, getUserToken, baseURL } from "../utils";
import "../src/i18n";

export default function index() {
	const token = getUserToken()
	
	useEffect(() => {
		if (token.length > 0) {

			axios.get(baseURL + `Cart/GetToken`)
				.then(response => setUserToken(response.data.obj) && console.log(response.data.obj, "signup"));
		}
	}, [])
	return (
		<Layout page='/'>
			<MainPage />
		</Layout>
	)
}