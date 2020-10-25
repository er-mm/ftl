import React from 'react';
import test from './test.json'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
	main: {
		textAlign: 'center'
	},
	title: {
		padding: 10
	},
	item: {
		'&:hover': {
			backgroundColor: '#ebebeb',
		}
	},
	users: {
		padding: 10,
		'&:hover': {
			fontSize: '3rem'
		}
	}
});


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dialogOpen: false,
			user: {}
		}
	}

	handleClick = (user, e) => {
		e.preventDefault();
		this.setState({ dialogOpen: true, user })
	}

	render() {
		const { classes } = this.props;
		const { dialogOpen, user } = this.state;
		return (
			<Container className={classes.main}>
				<Typography variant="h2" className={classes.title} gutterBottom>{`Full Throttle Labs - Assessment`}</Typography>
				<Grid container direction="column" justify="center">
					<Grid item>
						<Typography variant="h3" className={classes.title} gutterBottom>{`List of Users`}</Typography>
					</Grid>
					{test.members.map(users => (
						<Grid item key={users.id} className={classes.item} onClick={(e) => this.handleClick(users, e)}>
							<Typography variant="h4" className={classes.users} gutterBottom>{users.real_name}</Typography>
						</Grid>
					))}
				</Grid>
				<Dialog
					style={{ zIndex: 1302 }}
					open={dialogOpen}
					onClose={() => this.setState({ dialogOpen: false })}
				>
					<DialogContent>
						<Grid container direction="column" justify="center" alignItems="center">
							<Grid item>
								<Typography variant="h3" className={classes.title} gutterBottom>{user.real_name}</Typography>
							</Grid>
							<Grid item>
								<Typography variant="h4" className={classes.title} gutterBottom>{`TimeZone: ${user.tz}`}</Typography>
							</Grid>
							<Grid item container direction="row" alignItems="center" justify="center" spacing={5}>
								<Grid item>
									<Typography variant="h5" className={classes.title} gutterBottom>{`Activity Period Start`}</Typography>
								</Grid>
								<Grid item>
									<Typography variant="h5" className={classes.title} gutterBottom>{`Activity Period End`}</Typography>
								</Grid>
								{user.activity_periods?.map((period, index) => (
									<>
										<Grid item key={`${index}1`}>
											<Typography variant="h5" className={classes.title} gutterBottom>{`${period.start_time}`}</Typography>
										</Grid>
										<Grid item key={`${index}2`}>
											<Typography variant="h5" className={classes.title} gutterBottom>{`${period.end_time}`}</Typography>
										</Grid>
									</>
								))}
							</Grid>
						</Grid>
					</DialogContent>
				</Dialog>
			</Container>
		);
	}
}

export default withStyles(styles, { withTheme: true })(App);
