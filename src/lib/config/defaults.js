import dayjs from 'dayjs';

const calendar = {
	selected: null,
	start: dayjs().add(-100, 'year').toDate(),
	end: dayjs().add(100, 'year').toDate(),
	format: 'MM/DD/YYYY'
};

export { calendar };
