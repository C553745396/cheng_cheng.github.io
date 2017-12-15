/**
 * Created by uedxwg on 2015/7/23.
 */
$(function () {
    if (document.getElementById('mainRight')) {
        var hammerMainRight = new Hammer(document.getElementById('mainRight'));
        var hammerCeng = new Hammer(document.getElementById('ceng'));

        hammerMainRight.on("swiperight", function (e) {
            $('.ceng').css('display', 'block');
            $('.main').css({
                '-webkit-transform': ' translateX(0)',
                'transform': 'translateX(0)'
            })
        });
        hammerCeng.on('swipeleft', function () {
            $('.ceng').css('display', 'none');
            $('.main').css({
                '-webkit-transform': ' translateX(-33.333333%)',
                'transform': 'translateX(-33.333333%)'
            })
        })
    }
    $('#btn').bind('click', function () {
        $('.ceng').css('display', 'block');
        $('.main').css({
            '-webkit-transform': ' translateX(0)',
            'transform': 'translateX(0)'
        })
    });
    $('.ceng').bind('click', function () {
        $('.ceng').css('display', 'none');
        $('.main').css({
            '-webkit-transform': ' translateX(-33.333333%)',
            'transform': 'translateX(-33.333333%)'
        })
    });
})

$(function () {
    $('.mainNav li:eq(0)').click(function () {
        window.location.href = 'index.html'
    });
    $('.mainNav li:eq(1)').click(function () {
        window.location.href = 'messageList.html'
    });
    $('.mainNav li:eq(2)').click(function () {
        window.location.href = 'project.html'
    });
    $('.mainNav li:eq(3)').click(function () {
        window.location.href = 'riskPreview.html'
    });
    $('.mainNav li:eq(4)').click(function () {
        window.location.href = 'question.html'
    });
    $('.mainNav li:eq(5)').click(function () {
        window.location.href = 'attendanceManage.html'
    });
    $('.message').click(function () {
        window.location.href = 'messageList.html'
    });
    $('.calendar').click(function () {
        window.location.href = 'index.html'
    });

})
$(function () {
    $('.attendanceManageApply').click(function () {
        window.location.href = 'vacationApply.html'
    })

})
$(function () {
    $('.questionCheckDetails').click(function () {
        window.location.href = 'questionDetail.html'
    })

})
$(function () {
    $('.questionChoose').click(function () {
        window.location.href = 'project2.html'
    })

})
$(function () {
    $('.adds').click(function () {
        window.location.href = 'questionAdd.html'
    })

})
$(function () {
    $('.viewRiskchoos').click(function () {
        window.location.href = 'project.html'
    })

})
$(function () {
    $('.questionPhoto').click(function () {
        window.location.href = 'editorPicture.html'
    })
})


$(function () {
    $('.questionEditer').click(function () {
        window.location.href = 'questionAdd.html'
    })
})


$(function () {
    $('.selectPictureCommit').click(function () {
        window.location.href = 'editorPicture.html'
    })
})

$(function () {
    $('.selectPictureCancle').click(function () {
        window.location.href = 'editorPicture.html'
    })
})


$(function () {
    $('.selectPictureCommit_message').click(function () {
        window.location.href = 'messageDetail.html'
    })
})

$(function () {
    $('.selectPictureCancle_message').click(function () {
        window.location.href = 'messageDetail.html'
    })
})
$(function () {
    $('.takephoto_message').click(function () {
        window.location.href = 'messageDetail.html'
    })
})

$(function () {
    $('.questionAddSubmit').click(function () {
        window.location.href = 'question.html'
    })
})
$(function () {
    $('.questionAddCancle').click(function () {
        window.location.href = 'question.html'
    })
})


$(function () {
    $('#editorPictureLocal').click(function () {
        window.location.href = 'selectPicture.html'
    })
})
$(function () {
    $('#editorPictureTake').click(function () {
        window.location.href = 'photoUpload.html'
    })
})


$(function () {
    $('#editorPictureEditer').click(function () {
        window.location.href = 'photograph.html'
    })
})


$(function () {
    $('.viewRiskchoos').click(function () {
        window.location.href = 'project.html'
    })
})


$(function () {
    $('.riskList .risk-p1').click(function () {
        window.location.href = 'riskDetail.html'
    });
})


$(function () {
    $('#riskDetailAssign').click(function () {
        window.location.href = 'assignment.html'
    });
})

$(function () {
    $('.knowledgeList #detail').click(function () {
        window.location.href = 'knowledgeDetail.html'
    });
})

$(function () {
    $('.riskBtnList #photo').click(function () {
        window.location.href = 'editorPicture.html'
    });
})

$(function () {
    $('#attendanceManageWorkRecord').click(function () {
        window.location.href = 'signInList.html'
    });
})


$(function () {
    $('.photoGraph').click(function () {
        window.location.href = 'compilePhotograph.html'
    });
})

$(function () {
    $('.compileBtnList  :eq(2)').click(function () {
        window.location.href = 'photograph.html'
    });
})

$(function () {
    $('.compileBtnList :eq(3)').click(function () {
        window.location.href = 'photograph.html'
    });
})


$(function () {
    $('#questionChoose').click(function () {
        window.location.href = 'project2.html'
    });
})

/*����*/
$(function () {
    $('.btns p').each(function (index) {
        $('.btns p').eq(index).click(function () {
            $(this).next('ul').css('display', 'block');
        });
    });
    $('#ok li').each(function (index) {
        $(this).click(function () {
            var mus = $(this).text();
            $('#ok p').text(mus);
            $('#ok ul').css('display', 'none');
        })
    });
    $('#ok1 li').each(function (index) {
        $(this).click(function () {
            var mus = $(this).text();
            $('#ok1 p').text(mus);
            $('#ok1 ul').css('display', 'none');
        })
    })
})
function three(num) {
    $('.problemProject').css('display', 'none').eq(num).css('display', 'block');
    $('.viewRiskLevel p').css('border', '0').eq(num).css('border-bottom', '2px solid #69b043');
}
$(function () {
    $('#riskPreviewChoose').click(function () {
        window.location.href = 'project1.html'
    });
})

//$(function () {
//    $('#riskPreviewChoose').click(function () {
//        window.location.href = 'project.html'
//    });
//})


$(function () {
    $('#ePictureLocal').click(function () {
        window.location.href = 'selectPicture.html'
    });
})

$(function () {
    $('#ePictureTake').click(function () {
        window.location.href = 'photoUpload.html'
    });
})


$(function () {
    $('.calendar').click(function () {
        window.location.href = 'index.html'
    });
})

$(function () {
    $('.problemList .firstLi').click(function () {
        window.location.href = 'questionDetail.html'
    });
})


$(function () {
    $('#problemCheckChoose').click(function () {
        window.location.href = 'project.html'
    });
})

$(function () {
    $('#editorPictureCancle').click(function () {
        history.go(-1)
    })
})


$(function () {
    $('.photoGraphEditer').click(function () {
        window.location.href = 'editorPicture.html'
    })
})
$(function () {
    $('.photoGraphDelete').click(function () {
        history.go(-1)
    })
})

$(function () {
    $('#pUploadTake').click(function () {
        history.go(-1)

    })
})





