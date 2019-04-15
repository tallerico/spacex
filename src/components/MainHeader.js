import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import headMobile from '../img/Mobie_Circle_Header_1440X2960.svg'

function MainHeader() {
	const Header = styled.div`
		height: 100vh;
		background-image: url(${headMobile});
		background-repeat: no-repeat;
	`

	return <Header />
}

export default MainHeader
