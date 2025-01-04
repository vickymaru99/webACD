/*
* Version: 1.0.0
* Template: Iraje Web ACD
* Author: IRAJE
* Design and Developed by: IRAJE
* NOTE: This file contains the script for initialize & listener Template.
*/

/*----------------------------------------------
Index Of Script
------------------------------------------------

------ Functions --------

:: Button Style Changes
:: Username
:: Select2 Plugin

------- Listners ---------

:: DOMContentLoaded


------------------------------------------------
Index Of Script
----------------------------------------------*/

"use strict";
/*---------------------------------------------------------------------
              Button Style Changes
-----------------------------------------------------------------------*/

const buttonFunctionality = () =>{
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('clicked');
        });

        button.addEventListener('mouseleave', () => {
            button.classList.remove('clicked');
        });
    });
}

/*---------------------------------------------------------------------
              Username
-----------------------------------------------------------------------*/

const usernameChangeRequest = () => {
    const text = "Muthuswamy Venugopal Iyer";
    const maxLength = 25;

    const truncatedText = text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    document.getElementById('userName_emphasis').innerText = truncatedText;
}

/*---------------------------------------------------------------------
              Select2 Plugin
-----------------------------------------------------------------------*/

const select2 = () => {
    const data = [
        { id: '', text: '' },
        { id: 'option1', text: 'Option 1' },
        { id: 'option2', text: 'Option 2' },
        { id: 'option2', text: 'Option 2' },
        { id: 'option2', text: 'Option 2' },
        { id: 'option2', text: 'Option 2' },
        { id: 'option2', text: 'Option 2' },
        { id: 'option2', text: 'Option 2' },
        { id: 'option2', text: 'Option 2' },
        { id: 'option2', text: 'Option 2' },
        { id: 'option2', text: 'Option 2' },
        { id: 'option2', text: 'Option 2' },
        { id: 'option2', text: 'Option 2' },
        { id: 'option3', text: 'Option 3' }
    ];

    // IDs of the Select2 elements
    const selectIds = ['#select2Organization', '#select2Group'];

    // Initialize and populate each Select2 element with a clear option
    selectIds.forEach(function (id) {
        $(id).select2({
            data: data,
            placeholder: 'Select',
            allowClear: true,
            width: 'resolve',
        });

        // Show the backdrop when any Select2 opens
        $(id).on('select2:opening', function () {
            $('body').addClass('backdropSelect2');
            $('#select2-backdrop').show();
        });

        $(id).on('select2:open', function () {
            let searchField = $('.select2-container--open .select2-search__field');
            searchField.attr('placeholder', 'Search...');
        });

        // Hide the backdrop when any Select2 closes
        $(id).on('select2:closing', function () {
            $('body').removeClass('backdropSelect2');
            $('#select2-backdrop').hide();
        });

        // Log the selected value when an option is selected
        $(id).on('select2:select', function (e) {
            $(this).next('.select2-container').find('.select2-selection').css('border-color', 'var(--bs-select2-dropdown-option-active-color)');
            $(this).next('.select2-container').find('.select2-selection').addClass('select2--option-selected');
            console.log(`Selected value from ${id}:`, e.params.data);
        });

        // Log when selection is cleared
        $(id).on('select2:unselect', function () {
            console.log(`Selection cleared from ${id}`);
        });

        // Reset border color when the option is cleared
        $(id).on('select2:clear', function () {
            $(this).next('.select2-container').find('.select2-selection').css('border-color', '');
            $(this).next('.select2-container').find('.select2-selection').removeClass('select2--option-selected');
        });
    });
}

const select2modal = () => {
    const dataModal = [
        { id: '', text: '' },
        { id: 'option1', text: 'Option 1' },
        { id: 'option2', text: 'Option 2' },
        { id: 'option2', text: 'Option 2' },
        { id: 'option2', text: 'Option 2' },
        { id: 'option2', text: 'Option 2' },
        { id: 'option2', text: 'Option 2' },
        { id: 'option2', text: 'Option 2' },
        { id: 'option2', text: 'Option 2' },
        { id: 'option2', text: 'Option 2' },
        { id: 'option2', text: 'Option 2' },
        { id: 'option2', text: 'Option 2' },
        { id: 'option2', text: 'Option 2' },
        { id: 'option3', text: 'Option 3' }
    ];

    // IDs of the Select2 elements
    const select2IdModal = ['#connectionID'];

    // Initialize and populate each Select2 element with a clear option
    select2IdModal.forEach(function (id) {
        $(id).select2({
            data: dataModal,
            placeholder: 'Select',
            allowClear: true,
            width: 'resolve',
        });

        $(id).on('select2:open', function () {
            let searchField = $('.select2-container--open .select2-search__field');
            searchField.attr('placeholder', 'Search...');
        });

        // Log the selected value when an option is selected
        $(id).on('select2:select', function (e) {
            $(this).next('.select2-container').find('.select2-selection').css('border-color', 'var(--bs-select2-dropdown-option-active-color)');
            $(this).next('.select2-container').find('.select2-selection').addClass('select2--option-selected');
            console.log(`Selected value from ${id}:`, e.params.data);
        });

        // Log when selection is cleared
        $(id).on('select2:unselect', function () {
            console.log(`Selection cleared from ${id}`);
        });

        // Reset border color when the option is cleared
        $(id).on('select2:clear', function () {
            $(this).next('.select2-container').find('.select2-selection').css('border-color', '');
            $(this).next('.select2-container').find('.select2-selection').removeClass('select2--option-selected');
        });
    });
}


const datePicker = () => {
    const datePickerID = ['#bg_customDate', '#tbaDatenTime'];

    datePickerID.forEach(function (id){
        $(id).daterangepicker({
            timePicker: true,
            autoUpdateInput: false,
            "autoApply": true,
            "drops": "auto",
            "opens": "center",
            minDate: moment(),
            locale: {
                format: "DD-MM-YYYY hh:mm A",
                cancelLabel: 'Clear'
            },
            "cancelClass": "btn-secondary"
        }, function(start, end, label) {
            $(id).val(
                start.format('DD-MM-YYYY hh:mm A') + ' TO ' + end.format('DD-MM-YYYY hh:mm A')
            );

            console.log("A new date selection was made: " + start.format('YYYY-MM-DD HH:mm A') + ' to ' + end.format('YYYY-MM-DD HH:mm A'));
        });
        $(id).on('cancel.daterangepicker', function(ev, picker) {
            $(this).val('')
            console.log("clear")
            picker.setStartDate({})
            picker.setEndDate({})
        });
    });
}


function toggleSwitch() {
    const checkbox = document.getElementById('toggleSwitch');
    if (checkbox.checked) {
        console.log('Switch is ON');
        // Add any additional functionality for ON state here
    } else {
        console.log('Switch is OFF');
        // Add any additional functionality for OFF state here
    }
}
// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
/*---------------------------------------------------------------------
              DOMContentLoaded
-----------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', (event) => {
    // buttonFunctionality()
    usernameChangeRequest()
    select2()
    datePicker()
    //select2modal()
});


/*---------------------------------------------------------------------
              DataTable initialization script
-----------------------------------------------------------------------*/

$(document).ready(function() {

    var data = [
        {
            "id": "17013005",
            "applicationaccess": "172.168.1.225@dbmysqldbmysqldbmysqldbmysql:234234",
            "type": "TERMINAL-ssh TERMINAL-ssh TERMINAL-ssh",
            "department": "-",
            "location": "-",
            "starttime": "-",
            "endtime": "-",
            "lstTag": "httsp://, google"
        },
        {
            "id": "17013006",
            "applicationaccess": "192.168.1.100@dbpgsql:123456",
            "type": "TERMINAL-ssh",
            "department": "IT",
            "location": "NYC",
            "starttime": "2024-11-13 08:00",
            "endtime": "2024-11-13 10:00"
        },
        {
            "id": "52100802",
            "applicationaccess": "172.16.1.150@user1:user11",
            "type": "TERMINAL-unixSSH",
            "department": "-",
            "location": "-",
            "starttime": "-",
            "endtime": "-",
            "onetime": "-",
            "otp_YN": "Y",
            "lstTf": [
                {
                    "key": "MST",
                    "value": "Mobile | Email OTP"
                },
                {
                    "key": "GA",
                    "value": "Gauth authe"
                },
                {
                    "key": "SN",
                    "value": "Symphony ticket"
                },
                {
                    "key": "SM",
                    "value": "service now"
                }
            ],
            "rsa_YN": "",
            "oS_Access": "1",
            "access_Reason": "",
            "lstTag": "www.iraje.com, notepad, shelscript"
        },
        {
            "id": "5210080332",
            "applicationaccess": "172.16.1.150@user2:user22",
            "type": "windows",
            "department": "-",
            "location": "-",
            "starttime": "-",
            "endtime": "-",
            "onetime": "-",
            "otp_YN": "N",
            "lstTf": null,
            "rsa_YN": "",
            "oS_Access": "1",
            "access_Reason": "",
            "lstTag": ""
        }
    ];

    var IrTableList = $('#IrConnectionACD').DataTable({
        data: data,
        //colReorder: true,
        'colReorder': {
            'allowReorder': false
        },
        info: false,
        paging: false,
        scrollY: '330px',
        scrollCollapse: true,
        stripeClasses: [],
        columns: [
            {
                data: null,
                title: '',
                orderable: false,
                className: 'no-padding',
                width: '0%',
                render: function (rowData) {
                    const tags = rowData.lstTag ? rowData.lstTag.split(',').map(tag => `<li><a class="dropdown-item" href="#">${tag}</a></li>`).join('') : '';
                    if (!tags) {
                        return '';
                    } else {
                        return `
                            <div class="d-flex align-items-center ir-dropdown">
                                <svg xmlns="http://www.w3.org/2000/svg" class="threedots_dropdown" data-bs-toggle="dropdown" aria-expanded="false" width="20" height="20" viewBox="0 0 16 16" fill="currentColor" class="bi bi-three-dots-vertical">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                </svg>
                                <ul class="dropdown-menu ir_dropdown_menu">
                                    <div class="d-flex align-items-center justify-content-between small ir-tag-header">
                                        <div>Tag(s)</div>
                                        <i class="fa-solid fa-xmark"></i>
                                    </div>
                                    ${tags}
                                </ul>
                            </div>
                        `;
                    }
                }
            },

            {
                data: 'applicationaccess',
                title: 'Application Access',
                className: 'appliaction_ellipsis',
                render: function(data) {
                    return data;
                }
            },
            { data: 'type' },
            { data: 'department' },
            { data: 'location' },
            { data: 'starttime' },
            { data: 'endtime' }
        ],
        columnDefs: [
            { orderable: false, targets: [0] }
        ],
        order: [[1, 'asc']]
    });

    // Attach event listener to the custom input field search
    $('#dt_search').on('keyup', function() {
        IrTableList.search(this.value).draw();
    });

    // Handle row click for selection (allow only one row to be selected at a time) '' $('#IrConnectionACD tbody') ''
    IrTableList.on('click', 'tr', function() {
        // Deselect any previously selected row
        $('#IrConnectionACD tbody tr.selected').removeClass('selected');

        // Select the clicked row
        $(this).toggleClass('selected');
    });

    // Button click event to show selected row data
    $('#showDataBtn').click(function() {
        var selectedRow = IrTableList.row('.selected').data();
        if (selectedRow) {
            alert('Selected Data: ' + JSON.stringify(selectedRow));
        } else {
            alert('No row selected!');
        }
    });

    // Double-click event
    IrTableList.on('dblclick', 'tr', function () {
        var rowData = IrTableList.row(this).data();
        if (rowData) {
            console.log('Double-clicked row data:', rowData);
            //alert(`Selected Row Data: ${JSON.stringify(rowData, null, 2)}`);
        } else {
            console.log('No data found for this row.');
        }
    });

    // Button click event to refresh table data
    $('#refreshBtn').click(function() {
        IrTableList.clear().rows.add(data).draw();
    });

    // Handle backdrop for dropdowns
    $('#IrConnectionACD').on('show.bs.dropdown', function () {
        console.log('Dropdown is opening');
        //$('body').addClass('backdropSelect2');
        let backdrop = $('.dropdown-backdrop');
        if (backdrop.length === 0) {
            backdrop = $('<div class="dropdown-backdrop"></div>');
            $('body').append(backdrop);
        }
        backdrop.show();

        // Close backdrop when clicked
        backdrop.off('click').on('click', function () {
            console.log('Backdrop clicked, closing dropdown');
            //$('body').removeClass('backdropSelect2');
            $('.dropdown.show .threedots_dropdown').dropdown('toggle');
            backdrop.hide();
        });
    });

    $('#IrConnectionACD').on('hide.bs.dropdown', function () {
        console.log('Dropdown is closing');
        //$('body').removeClass('backdropSelect2');
        $('.dropdown-backdrop').hide();
    });
});