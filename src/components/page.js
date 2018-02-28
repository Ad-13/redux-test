import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Page extends Component {
	static propTypes = {
		year: PropTypes.number.isRequired,
		photos: PropTypes.array.isRequired,
		setYear: PropTypes.func.isRequired
	}

	render() {
		const { year, photos } = this.props
		return (
			<div className='ib page'>
				<p>
					<button className='btn' onClick={this.onYearBtnClick.bind(this)}>2016</button>
					<button className='btn' onClick={this.onYearBtnClick.bind(this)}>2015</button>
					<button className='btn' onClick={this.onYearBtnClick.bind(this)}>2014</button>
				</p>
				<h3>{year} год</h3>
				<p>У тебя {photos.length} фото.</p>
			</div>
		)
	}

	onYearBtnClick(e) {
		this.props.setYear(+e.target.innerText)
	}
}
