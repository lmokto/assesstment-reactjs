import React from 'react'

class Professions extends React.Component {

    render() {
        var jobs = this.props.jobs;
        return (
            <div>
                <p>Jobs</p>
                <ul>
                    { jobs.map((item,i) => <li key={i}>{item}</li>) }
                </ul>
            </div>
        )
    }
}


class Friends extends React.Component {

    render() {
        var friends = this.props.friends;
        return (
            <div>
                <p>Friends</p>
                <ul>
                    { friends.map((friend,i) => <li key={i}>{friend}</li>) }
                </ul>
            </div>
        )
    }
}


class Aspect extends React.Component {

    render() {
        var look = this.props.look;
        return (
            <div>
                <p>Aspect</p>
                <ul>
                    <li>Age: {look.age}</li>
                    <li>Height: {look.height}</li>
                    <li>Weight: {look.weight}</li>
                    <li>Hair Color: {look.hair_color}</li>
                </ul>
            </div>
        )
    }
}

class About extends React.Component {

    render() {
        return (
            <h2 className="title">{this.props.name}</h2>
        )
    }
}

class Avatar extends React.Component {

    render() {
        return (
            <img className="avatar" src={this.props.thumbnail} />
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
