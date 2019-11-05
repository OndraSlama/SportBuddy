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
	eventStartTime,
	eventEndTime
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

	if (exactTimeChecked) {
		return (
			<TooltipSlider
				{...commonProps}
				defaultValue={getMinutes(eventStartTime)}
				included={false}
				onChange={time =>
					onChange([getHoursText(time), getHoursText(time)])
				}
				tipFormatter={value => getHoursText(value)}
				disabled={disable}
			/>
		);
	} else {
		return (
			<TooltipRange
				{...commonProps}
				defaultValue={[
					getMinutes(eventStartTime),
					getMinutes(eventEndTime)
				]}
				onChange={time =>
					onChange([getHoursText(time[0]), getHoursText(time[1])])
				}
				tipFormatter={value => getHoursText(value)}
				disabled={disable}
			/>
		);
	}
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
	// Old version
	// const hours = Math.floor(minutes / 60);
	// const min = minutes % 60 === 0 ? (minutes % 60) + "0" : minutes % 60;
	// console.log(moment(dateObj).format("HH:mm"));
	// return hours + ":" + min;
}
