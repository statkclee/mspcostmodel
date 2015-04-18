/* 
 * This Jquery/Javascript file takes care of the sending and receiving of any
 * data relating to the Data Center Assets Cost Management function within the application. 
 */

$(function() {
    var url = 'ajax_channelModify';

    function checkNumbers(tableName, fieldName) {
        if (fieldName === "") {
            $('#'+tableName+"errorSpan").text('A value cannot be empty - enter zero for nothing');
            return false;
        } else {
            var value = fieldName.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
            var intRegex = /^[+\-]?(\.\d+|\d+(\.\d+)?)$/;
            if (!intRegex.test(value)) {
                $('#'+tableName+"errorSpan").text('The values can only be numbers');
                return false;
            } else {
                return true;
            }
        }
    }
    
    function ajaxCall(myjsonforPosting) {
        $.ajax({
            type: 'POST',
            url: url,
            data: myjsonforPosting,
            async: false,
            success: function(response) {
                if (response === "true") {
                    location.reload();
                }
            }, error: function(jqXHR, textStatus, errorThrown) {
                window.location.assign('error/index');
            }
        }, 'json');
    }

    function prepareJson(tableName)
    {
        var lastupdatedby = $('#lastupdatedby').val();
        var tableName = tableName;
        var errors=true;
        var error_count=0;
        var tds = $('#' + tableName).children('table').children('tbody').children('tr').children('td').length;
        var myjsonforPosting = {};
        for (var i = 0; i < tds; i++) {
            
            if($('#' + tableName + "td" + i).parent('td').prop('className') === "tableTD") {
                errors = checkNumbers(tableName, $('#' + tableName + "td" + i).val());
                if (!errors) {
                    error_count+=1;
                }
            } 
            
            if ($('#' + tableName + "tr" + i).val() === "Currency") {
                myjsonforPosting["original_currency"]=$('#'+tableName+'currencyselect'+i).val();
            } else {
                myjsonforPosting["" + $('#' + tableName + "tr" + i).val()] = $('#' + tableName + "td" + i).val();
            }
            
        }    
        if (error_count!==0) {
            var myjsonforPosting=false;
            return myjsonforPosting;
        } else {
            myjsonforPosting["lastupdatedby"] = lastupdatedby;
            myjsonforPosting["tableName"] = tableName;
            return myjsonforPosting;
        }
    }

    $('.imageClick').click(function() {
        var item = $(this).attr("name");
        if ($('#toggleItem').val() === "") {
            $('#toggleItem').val(item);
            $('#' + item).slideToggle(300);
            if (item !== "tier_1_margin_expectation" && item !== "tier_2_margin_expectation" && item !== "channel_business_development_plan") {
                $('#channelMainMID').animate({scrollTop: $('#' + item).offset().top});
            }
        } else if ($('#toggleItem').val() === item) {
            $('#' + item).slideToggle(300);
            if (item !== "inflation" && item !== "fx" && item !== "sliaison") {
                $('#channelMainMID').animate({scrollTop: $('#' + item).offset().top});
            }
            $('#toggleItem').val("item");
        } else if ($('#toggleItem').val() !== item) {
            $('#' + $('#toggleItem').val()).slideToggle(300);
            $('#toggleItem').val(item);
            $('#' + item).slideToggle(300);
        }
    });


    $('#channel_certification_coursesForm').submit(function() {
        var tableName = ($(this).parent().find('input:hidden').val());
        myjsonforPosting = prepareJson(tableName);
        if (myjsonforPosting) {
            ajaxCall(myjsonforPosting);
        }
        return false;
    });

    $('#channel_legal_expensesForm').submit(function() {
        var tableName = ($(this).parent().find('input:hidden').val());
        myjsonforPosting = prepareJson(tableName);
        if (myjsonforPosting) {
            ajaxCall(myjsonforPosting);
        }
        return false;
    });

    $('#channel_training_budgetForm').submit(function() {
        var tableName = ($(this).parent().find('input:hidden').val());
        myjsonforPosting = prepareJson(tableName);
        if (myjsonforPosting) {
            ajaxCall(myjsonforPosting);
        }
        return false;
    });

    $('#channel_marketing_supportForm').submit(function() {
        var tableName = ($(this).parent().find('input:hidden').val());
        myjsonforPosting = prepareJson(tableName);
        if (myjsonforPosting) {
            ajaxCall(myjsonforPosting);
        }
        return false;
    });

    $('#tier_1_margin_expectationForm').submit(function() {
        var tableName = ($(this).parent().find('input:hidden').val());
        myjsonforPosting = prepareJson(tableName);
        if (myjsonforPosting) {
            ajaxCall(myjsonforPosting);
        }
        return false;
    });

    $('#tier_2_margin_expectationForm').submit(function() {
        var tableName = ($(this).parent().find('input:hidden').val());
        myjsonforPosting = prepareJson(tableName);
        if (myjsonforPosting) {
            ajaxCall(myjsonforPosting);
        }
        return false;
    });

    $('#channel_credit_evaluationForm').submit(function() {
        var tableName = ($(this).parent().find('input:hidden').val());
        myjsonforPosting = prepareJson(tableName);
        if (myjsonforPosting) {
            ajaxCall(myjsonforPosting);
        }
        return false;
    });

    $('#channel_advertising_budgetForm').submit(function() {
        var tableName = ($(this).parent().find('input:hidden').val());
        myjsonforPosting = prepareJson(tableName);
        if (myjsonforPosting) {
            ajaxCall(myjsonforPosting);
        }
        return false;
    });


    $('#channel_security_budgetForm').submit(function() {
        var tableName = ($(this).parent().find('input:hidden').val());
        myjsonforPosting = prepareJson(tableName);
        if (myjsonforPosting) {
            ajaxCall(myjsonforPosting);
        }
        return false;
    });

    $('#channel_business_development_planForm').submit(function() {
        var tableName = ($(this).parent().find('input:hidden').val());
        myjsonforPosting = prepareJson(tableName);
        if (myjsonforPosting) {
            ajaxCall(myjsonforPosting);
        }
        return false;
    });

    $('#channel_professional_bodies_membershipForm').submit(function() {
        var tableName = ($(this).parent().find('input:hidden').val());
        myjsonforPosting = prepareJson(tableName);
        if (myjsonforPosting) {
            ajaxCall(myjsonforPosting);
        }
        return false;
    });
    
    return false;
});
