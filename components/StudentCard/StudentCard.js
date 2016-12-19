import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './StudentCard.css';
import Card from 'react-material-card';

class StudentCard extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  static propTypes = {
    student: PropTypes.object,
    className: PropTypes.string,
  };

  render() {
    const { student, className, ...other } = this.props;
    return (
      <div
      onClick={this.handleClick} >
        <Card
        level={2}>
          <div className={s.thumbnail_box}>
            <img src={student.path} className={s.thumbnail}></img>
          </div>
          <div className={s.content} >
            <h3 className={s.title} >{student.id}</h3>
          </div>
        </Card>
      </div>
    );
  }

  handleClick(e) {
    console.log(this);
    console.log('open link: ' + this.props.student.url);
    window.open(this.props.student.url);
  }

}

export default StudentCard;
