import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const styles = {
	root: {
		flexGrow: 1,
		background: '#666666',
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
}

function ButtonAppBar(props) {
	const { classes } = props
	return (
		<AppBar classes={{ root: classes.root }} position="static">
			<Toolbar>
				<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" color="inherit" className={classes.grow}>
					Far Galaxy
				</Typography>
				<Button color="inherit">Login</Button>
			</Toolbar>
		</AppBar>
	)
}

ButtonAppBar.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ButtonAppBar)
