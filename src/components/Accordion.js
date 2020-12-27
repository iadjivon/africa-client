import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };



  return (
  
<div className="accordion-div">


    {/* ACCORDION NUMBER 1 */}
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <h1> West Africa </h1>
        </AccordionSummary>

        <AccordionDetails>

<div className= "WesResOne"> 
    {/* RECIPE NUMBER 1 */}

            <div className="left-side">
                <h1> Nkatenkwen</h1>
                <h2> Ghana </h2>
                <img src="https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/11/groundnut_stew_abom_.jpg" width="350" height="250" />
                <p>Nkatenkwen stew with fish, eggs and hot palm oil served in a traditional asanka bowl</p>
            </div>
                
            <div class="description">
                <h3>Description: </h3>
                <p> This hearty and satisfying Ghanaian stew combines the richness of peanuts or groundnuts with palm oil, tomatoes, mixed chillies, onions, garlic, and meat or fish. It is traditionally eaten with fufu but it can also be eaten by itself or with rice.</p>
                <h3>Ingredients:</h3>
                <p>

                500 g mutton or chicken thighs |
                1 tablespoon vegetable or palm oil |
                6 shallots, chopped |
                2 medium onions, chopped |
                4 cloves garlic, chopped |
                1 red pepper, diced |
                1 tablespoon smoked paprika |
                1 teaspoon cayenne pepper |
                1 tablespoon ground ginger |
                1 scotch bonnet pepper |
                250 g groundnut paste |
                200 g pumpkin, peeled and chopped |
                8 pods okra, chopped |
                1 × 400 g tin chopped tomatoes |
                1 tablespoon ground crayfish (or 3 anchovy fillets) |
                2 cobs sweetcorn, each chopped in 4 pieces |
                250 g white fish, such as pollock or tilapia |
                ½ bunch fresh coriander to serve salt and black pepper.

                </p>
        </div>

</div>
<hr/>

<div className= "WesResOne"> 
    {/* RECIPE NUMBER 1.2 */}

            <div className="left-side">
                <h1> Jollof Rice</h1>
                <h2> West African Region </h2>
                <img src="https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/11/shutterstock_585882515.jpg" width="350" height="250" />
                
                <p>Jollof rice with chicken and fried plantain</p>
            </div>
                
            <div class="description"> 
                <h3>Description: </h3>
                <p> For the sake of smooth-sailing diplomatic relations, jollof rice is ascribed to the whole region although fierce wars (of words, thankfully!) have broken out to determine which nation makes the best version of this spicy tomato rice dish. It is evidently one of the most popular West African dishes and each country has its own version.</p>
                <h3>Ingredients: </h3>
                <p>

                2 medium tomatoes, roughly chopped (about 5 ounces each) | 
                ½ medium Scotch bonnet pepper (or use a habanero pepper), stem removed | 
                ½ medium onion, roughly chopped | 
                3 small red bell peppers, roughly chopped (about 5 ounces each) | 
                ½ cup vegetable oil | 
                1 ½ teaspoons salt | 
                1 teaspoon curry powder | 
                1 ½ teaspoons hot ground chile pepper, such as African dried chile or cayenne | 
                1 ½ teaspoons garlic powder | 
                1 tablespoon plus 1 heaping teaspoon onion powder | 
                2 bay leaves | 
                ½ teaspoon ground ginger | 
                1 tablespoon dried thyme | 
                2 ½ cups medium-grain rice | 

                </p>
            </div>


</div>
<hr/>
<div className= "WesResOne"> 
    {/* RECIPE NUMBER 1.3 */}

            <div className="left-side">
                <h1> Yassa</h1>
                <h2> Senegal </h2>
                <img src="https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/11/hb5her.jpg" width="350" height="250" />
                
                <p>Chicken Yassa with marinated onions and couscou</p>
            </div>
                
            <div class="description"> 
                <h3>Description: </h3>
                <p> This spicy, delicious dish has a base of onions, garlic, peppers and cabbage that is topped with typically chicken marinated with lemon and onions. A Senegalese staple, it is one of the most popular food items in West Africa.</p>
                <h3>Ingredients:</h3>
                <p>
                3 chicken leg quarters (leg and thigh) |
                3 chicken breast halves (bone-in) |
                5 onions (about 2 pounds) peeled, halved, and thinly sliced |
                1 habanero or scotch bonnet pepper |


                </p>
            </div>


</div>
        </AccordionDetails>
      </Accordion>











{/* ACCORDION NUMBER 2 */}
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <h1> East Africa </h1>
        </AccordionSummary>
        <AccordionDetails>
            <div>
            <h1> This is a title</h1>
            <img src="https://cdn.tasteatlas.com/Images/Dishes/c8c30cb735ba490dbff832360b245fc6.jpg?w=450&h=350" />
            </div>
            <div>
            </div>
        </AccordionDetails>
      </Accordion>










{/* ACCORDION NUMBER 3 */}
<Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <h1> North Africa </h1>
        </AccordionSummary>
        <AccordionDetails>
            <div>
            <h1> This is a title</h1>
            <img src="https://cdn.tasteatlas.com/Images/Dishes/c8c30cb735ba490dbff832360b245fc6.jpg?w=450&h=350" />
            </div>
            <div>
            </div>
        </AccordionDetails>
      </Accordion>





{/* ACCORDION NUMBER 4 */}
      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel4d-header">
          <h1> Central Africa </h1>
        </AccordionSummary>
        <AccordionDetails>
            <div>
            <h1> This is a title</h1>
            <img src="https://cdn.tasteatlas.com/Images/Dishes/c8c30cb735ba490dbff832360b245fc6.jpg?w=450&h=350" />
            </div>
            <div>
            </div>
        </AccordionDetails>
      </Accordion>







{/* ACCORDION NUMBER 5 */}
      <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <h1> South Africa </h1>
        </AccordionSummary>
        <AccordionDetails>
            <div>
            <h1> This is a title</h1>
            <img src="https://cdn.tasteatlas.com/Images/Dishes/c8c30cb735ba490dbff832360b245fc6.jpg?w=450&h=350" />
            </div>
            <div>
            </div>
        </AccordionDetails>
      </Accordion>

</div>
  );
}