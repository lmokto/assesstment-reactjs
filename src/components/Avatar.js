import React from 'react'

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
