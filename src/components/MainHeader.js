import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import headMobile from '../img/Mobie_Circle_Header_1440X2960.svg'
import headMain from '../img/Circle_Header_1600X1000.svg'

function MainHeader() {
	const Header = styled.div`
		height: 100vh;
		background-image: url(${headMobile});
		background-repeat: no-repeat;
		background-size: cover;

		@media (min-width: 940px) {
			background-image: url(${headMain});
		}
	`

	return <Header />
}

export default MainHeader
