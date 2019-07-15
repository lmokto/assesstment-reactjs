import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Avatar from './Avatar'
import axios from 'axios';


class PopulationList extends Component {

    constructor() {
        super()
        this.state = {
            populations: [],
        }
        this.getPopulationsBrastlewark()
    }

    getPopulationsBrastlewark = () => {
        var self = this;
        axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
        .then(function (response) {
            self.setState({populations: response.data.Brastlewark})
            console.log(self.state);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    render() {
        return (
            <div>
                {this.state.populations ? (
                    <div>
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.populations.map(avatar => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Avatar population={avatar} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No populations found" }
            </div>
        )
    }
}
export default PopulationList;