$(function() {
				var curr = new Date().getFullYear();
				var opt = {
					'date': {
						preset: 'date',
						invalid: {
							daysOfWeek: [0, 6],
							daysOfMonth: ['5/1', '12/24', '12/25']
						}
					},
					'datetime': {
						preset: 'datetime',
						minDate: new Date(2013, 3, 10, 9, 22),
						maxDate: new Date(2018, 7, 30, 15, 44),
						stepMinute: 5
					},
					'time': {
						preset: 'time'
					},
					'credit': {
						preset: 'date',
						dateOrder: 'mmyy',
						dateFormat: 'mm/yy',
						startYear: curr,
						endYear: curr + 10,
						width: 100
					},
					'select': {
						preset: 'select'
					},
					'select-opt': {
						preset: 'select',
						group: true,
						width: 50
					}
				}
				$('.settings select').bind('change', function() {
					var demo = 'datetime';
					if (!demo.match(/select/i)) {
						$('.demo-test-' + demo).val('');
					}
					$('.demo-test-' + demo).scroller('destroy').scroller($.extend(opt[demo], {
						theme: 'android-holo light',
						mode: 'scroller',
						lang: '',
						display: 'modal',
						animate: 'none'
					}));
					$('.demo').hide();
					$('.demo-' + demo).show();
				});
				$('#demo').trigger('change');
				$('.settings select').bind('change', function() {
					var demo = 'datetime';
					if (!demo.match(/select/i)) {
						$('.demo-test-' + demo).val('');
					}
					$('.demo-test-' + demo).scroller('destroy').scroller($.extend(opt[demo], {
						theme: 'android-holo light',
						mode: 'scroller',
						lang: '',
						display: 'modal',
						animate: 'none'
					}));
					$('.demo').hide();
					$('.demo-' + demo).show();
				});
				$('#demo1').trigger('change');
			});