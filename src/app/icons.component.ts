import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faHome);
library.add(faUserCircle);
library.add(faBell);
library.add(faCalendar);

@Component({
    selector: '',
    template: ''
})

export class IconsLibrary {}