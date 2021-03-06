import React from "react";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import CardSkill from '../CardSkill/CardSkill';

class SkillsExp extends React.Component {
    render() {
        return (
            <>
                <Container maxWidth="lg" className="skills-top">
                    <h1 className="titles-bg-black">Skills</h1>
                    <h3 className="sub-bg-black">Latest technologies</h3>
                    <Grid container spacing={2}>
                        <Grid item lg={4} md={6} sm={6} xs={6}>
                            <CardSkill Skill="Javascript" Descriptionskill="Programming Language commonly used in web development."></CardSkill>
                        </Grid>
                        <Grid item lg={4} md={6} sm={6} xs={6}>
                            <CardSkill Skill="HTML5" Descriptionskill="HyperText Markup Language for websites"></CardSkill>
                        </Grid>
                        <Grid item lg={4} md={6} sm={6} xs={6}>
                            <CardSkill Skill="CSS3" Descriptionskill="Cascading Style Sheets for Styling websites"></CardSkill>
                        </Grid>
                        <Grid item lg={4} md={6} sm={6} xs={6}>
                            <CardSkill Skill="Sass" Descriptionskill="Powerful professional grade CSS extension language in the world"></CardSkill>
                        </Grid>
                        <Grid item lg={4} md={6} sm={6} xs={6}>
                            <CardSkill Skill="React" Descriptionskill="A JavaScript library for building user interfaces"></CardSkill>
                        </Grid>
                        <Grid item lg={4} md={6} sm={6} xs={6}>
                            <CardSkill Skill="NextJs" Descriptionskill="React Server Side Rendering Applications (SSR)"></CardSkill>
                        </Grid>
                        <Grid item lg={4} md={6} sm={6} xs={6}>
                            <CardSkill Skill="Git" Descriptionskill="widely used modern version control system"></CardSkill>
                        </Grid>
                        <Grid item lg={4} md={6} sm={6} xs={6}>
                            <CardSkill Skill="SEO" Descriptionskill="Increasing the visibility of a website to users of a web search engine"></CardSkill>
                        </Grid>
                    </Grid>
                </Container>
                <style jsx global>{`
                 .sub-bg-black{
                    font-family:'Roboto';
                font-size:20px;
                margin-top:0px;
                color:#A6ACAF;

                }
                .titles-bg-black{
                    font-family:'Roboto';
                    font-size:55px;
                    margin-bottom:5px;

                    }
                    .skills-top{
                        padding-top:40px;
                    }
                    
                    @media only screen and (max-width: 959px){
                        .titles-bg-black{
                            margin-top:0px;
                            font-family:'Roboto';
                            font-size:30px;
                            margin-bottom:5px;
    
                            }
                    }
                    `}</style>
            </>

        )
    }
}
export default SkillsExp;