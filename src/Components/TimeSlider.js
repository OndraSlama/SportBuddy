import React from "react";
import moment from "moment";
import Slider, { Range } from "rc-slider";
import Tooltip from "rc-tooltip";
import "rc-slider/assets/index.css";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const TooltipRange = createSliderWithTooltip(Range);
const TooltipSlider = createSliderWithTooltip(Slider);

const TimeSlider = ({
	exactTimeChecked = false,
	onChange = () => {},
	disable = false,
	step = 1,
	startTime,
	endTime
}) => {
	const commonProps = {
		min: 0,
		max: 1440 - step,
		step: step,
		marks: {
			360: "6:00",
			540: "9:00",
			720: "12:00",
			900: "15:00",
			1080: "18:00"
		}
	};

	let mySlider = "";
	if (exactTimeChecked) {
		mySlider = (
			<TooltipSlider
				{...commonProps}
				defaultValue={getMinutes(startTime)}
				included={false}
				onChange={time => onChange([getHoursText(time), getHoursText(time)])}
				tipFormatter={value => getHoursText(value)}
				disabled={disable}
			/>
		);
	} else {
		mySlider = (
			<TooltipRange
				{...commonProps}
				defaultValue={[getMinutes(startTime), getMinutes(endTime)]}
				onChange={time => onChange([getHoursText(time[0]), getHoursText(time[1])])}
				tipFormatter={value => getHoursText(value)}
				disabled={disable}
				pushable={step}
			/>
		);
	}

	return <div>{mySlider}</div>;
};

export default TimeSlider;

function getMinutes(hoursTxt) {
	return moment.duration(hoursTxt).asMinutes();
}

function getHoursText(minutes) {
	let dateObj = new Date();
	dateObj.setHours(0);
	dateObj.setMinutes(minutes);
	return moment(dateObj).format("HH:mm");
}
