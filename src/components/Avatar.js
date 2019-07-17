import React from 'react'

/*

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { List, ListSubheader } from '@material-ui/core';

const Avatar = (elems) => {
    return(
        <div>
          { elems.population ? (
                <Card>
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                        image={elems.population.thumbnail}
                        title={elems.population.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {elems.population.name}
                        </Typography>
                        <Typography component="h3">
                            Friends
                        </Typography>
                        <ListItem>
                            { elems.population.friends.slice(0, 4).map(name => (
                                <ListItemText>{name}</ListItemText>
                            ))}
                        </ListItem>
                        <Typography component="h3">
                            Professions
                        </Typography>              
                        <ListItem>
                            { elems.population.professions.slice(0, 4).map(skill => (
                                <ListItemText>{skill}</ListItemText>
                            ))}
                        </ListItem>
                        <Typography component="h3">
                            Look
                        </Typography>
                        <ListItem>
                            <ListItemText>Age {elems.population.age}</ListItemText>
                            <ListItemText>Height {elems.population.height}</ListItemText>
                            <ListItemText>Weight {elems.population.weight}</ListItemText>
                            <ListItemText>Hair {elems.population.hair_color}</ListItemText>
                        </ListItem>
                    </CardContent>
                </Card>
          ): null }  
        </div>
    )
}
*/


class Professions extends React.Component {

    render() {
        return (
            <li>
                { this.props.jobs.map(job => (
                    <ul>{job}</ul>
                ))}
            </li>
        )
    }
}


class Friends extends React.Component {

    render() {
        return (
            <li>
                { this.props.friends.map(friend => (
                    <ul>{friend}</ul>
                ))}
            </li>
        )
    }
}


class Aspect extends React.Component {

    render() {
        var look = this.props.look;
        return (
            <li>
                <ul>Age: {look.age}</ul>
                <ul>Height: {look.height}</ul>
                <ul>Weight: {look.weight}</ul>
                <ul>Hair Color: {look.hair_color}</ul>
            </li>
        )
    }
}

class About extends React.Component {

    render() {
        return (
            <h2 className="article__title">{this.props.name}</h2>
        )
    }
}

class Avatar extends React.Component {

    render() {
        var styles = {
            width: "600px",
            height: "400px"
        }
        return (
            <img className="Avatar"
                src={this.props.thumbnail}
                style={styles}
            />
        )
    }
}

class Profile extends React.Component {

    render() {
        var details = this.props.population;
        return (
            <article className="article">
                <Avatar thumbnail={details.thumbnail}/>
                <About name={details.name}/>
                <Aspect look={details}/>
                <Professions jobs={details.professions}/>
                <Friends friends={details.friends}/>
            </article>
        )
    }
}

export default Profile
