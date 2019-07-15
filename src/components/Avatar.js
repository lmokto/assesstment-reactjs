import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

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
                        <Typography component="p">
                            {elems.population.hair_color}
                        </Typography>
                        <Typography component="p">
                            {elems.population.age} - {elems.population.height} - {elems.population.weight}
                        </Typography>                        
                    </CardContent>
                </Card>
          ): null }  
        </div>
    )
}
export default Avatar