import Timeline from '../WurzburgComponents/Timeline';
import {Link} from 'react-router-dom';
import '../Wurzburg.css';

function Wurzburg7B() {
  return ( 
    <div>
      <Timeline timelineProgress="27" timelineReference="17-18th A.D."/>
      <div className="clue-background">
        <div className="clue-background-title">The Residenz</div>
        <div className="clue-background-div">After the Swedish war and occupation, within a space of 100 years a bishop’s palace was built, the Residenz and the bishops moved from the fortress to the Residenz.</div>
        <div className="clue-background-div">Johann Philipp Franz von Schönborn moved the court to a palace erected in 1701, the predecessor of the Residence. However, the rather small palace did not, in his opinion, measure up to his position as an absolute monarch - he was looking for something comparable to the Palace of Versailles or Schönbrunn Palace. Having won a fortune at the time in a court case in the year of his accession, he used the funds to undertake a building project that would proclaim his political standing to all. The foundation stone was laid on 22 May 1720.</div>
        <div className="clue-background-div">Ready for the next clue?</div>
        <Link to="/wuerzburg/residenz/intro/clue">
            <div className="gameNext-button">
                Yes
            </div>
        </Link>
      </div>
    </div>  
  );
}

export default Wurzburg7B;