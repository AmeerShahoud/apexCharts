const ctx = document.getElementById('myChart')?.getContext('2d');
const labels = [1,2,3,4];
if (ctx) { 
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            
            labels: [... new Array(7).fill(0)],

            datasets: [
                {
                    data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
            legend: {
                position: 'top',
                display: false
            },
            scales: {
                xAxes: [{
                    display: false,
                    
                }],
                yAxes: [{
                    display: false,
                    
                }]
            }
            },
        }
    });
}

const closer = document.getElementById('closer');
if (closer) {
closer.addEventListener('click', (event) => {
    document.getElementById('sidebar').classList.toggle('toggler-2');
    if (document.getElementById('closer').firstElementChild.classList.contains('mdi-greater-than') ) {
        document.getElementById('closer').firstElementChild.classList.remove('mdi-greater-than');
        document.getElementById('closer').firstElementChild.classList.add('mdi-less-than');
    }
    else {
        document.getElementById('closer').firstElementChild.classList.add('mdi-greater-than');
        document.getElementById('closer').firstElementChild.classList.remove('mdi-less-than');
    }
});
}

const popoverContent =  document.querySelector('[data-name="popover-content"]');
if (popoverContent) {
    const options = {
        html: true,
        content: popoverContent
    };
    const element = document.getElementById('show-rights')
const popover = new bootstrap.Popover(element, options)
}
const eyePassword = document.getElementById('btn-password');
if (eyePassword) {
    eyePassword.addEventListener('click', e => {
        e.preventDefault();
        const passwordInput = document.getElementById('password');
        if (eyePassword.classList.contains('mdi-eye')) {
            eyePassword.classList.remove('mdi-eye');
            passwordInput.type = 'password';
            eyePassword.classList.add('mdi-eye-off');
        }
        else {
            passwordInput.type = 'text';
            eyePassword.classList.add('mdi-eye');
            eyePassword.classList.remove('mdi-eye-off');
        }
    });
}
const loader = document.getElementById('loadEmployee');
if (loader) {
    loader.addEventListener('click', () => {

    });
}


const toBeInsertedDiv = `
<div class="accordion-item mt-2 ">
            <h2 class="accordion-header" id="AdminstrtiveVoilationTypes">
              <button class="accordion-button shadow-lg shadow-lg" type="button" data-bs-toggle="collapse"
                data-bs-target="#collpaseTwo" aria-expanded="true" aria-controls="collpaseTwo">
                تقرير مخالفة إدارية - مدير الادارة | Adminstrtive Violation Report
              </button>
            </h2>
            <div id="collpaseTwo" class="accordion-collapse collapse show" aria-labelledby="AdminstrtiveVoilationTypes"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <div class="row">
                  <div class="col-6">
                    <label for="type" class="form-label">النوع</label>
                    <select class="form-select">
                      <option value=""></option>
                      <option value="1">مخلص</option>
                      <option value="2">موظف</option>
                    </select>
                  </div>
                  <div class="col-6">
                    <label for="type" class="form-label">نوع الموظف</label>
                    <select class="form-select">
                      <option value=""></option>
                      <option value="1">مخلص</option>
                      <option value="2">موظف</option>
                    </select>
                  </div>
                </div>
                <div class="row mt-2 align-items-end">
                  <div class="col-6">
                    <label for="type" class="form-label">الاسم</label>
                    <input type="text" class="form-control" />
                  </div>

                  <div class="col-6">
                    <label for="type" class="form-label">الرقم الشخصي</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="row mt-2 align-items-end">
                  <div class="col-4">
                    <label for="type" class="form-label">المسمى الوظيفي</label>
                    <select class="form-select">
                    </select>
                  </div>
                  <div class="col-8">
                    <label for="type" class="form-label">الإدارة</label>
                    <input class="form-control" />
                  </div>
                </div>

                <div class="row mt-2 align-items-end">
                  <div class="col-4">
                    <label for="type" class="form-label">تصنيف المخالفة</label>
                    <select class="form-select">
                    </select>
                  </div>
                  <div class="col-4">
                    <label for="type" class="form-label">نوع المخالفة</label>
                    <select class="form-select">
                    </select>
                  </div>
                  <div class="col-4">
                    <label for="type" class="form-label">رقم البلاغ الامني</label>
                    <input class="form-control" />
                  </div>
                </div>
                <div class="row mt-2">
                  <div class="form-group">
                    <div class="d-flex justify-content-between">
                      <label for="explan" class="form-label">
                        موضوع المخالفة
                      </label>
                    </div>
                    <textarea id="explan" class="form-control">
                  </textarea>
                  </div>
                </div>
                <div class="row mt-2">
                  <div class="form-group col-4">
                    <div class="d-flex justify-content-between">
                      <label for="explan" class="form-label">
                        الجزاء
                      </label>
                    </div>
                    <input class="form-control" placeholder="خصم يوم" type="text" />
                    </input>
                  </div>
                </div>
                <div class="d-flex w-25 mt-2 " style="gap:15px">
                  <button class="btn btn-secondary">
                    حفظ
                  </button>
                  <button class="btn btn-primary">
                    مسح
                  </button>
                </div>

              </div>
            </div>

          </div>`;

const saveButton = document.getElementById('btn-save-p');
if (saveButton) {
    saveButton.addEventListener('click', () => {
    const element = document.createElement('div');
    element.innerHTML = toBeInsertedDiv;
    document.getElementById('to-be-inserted').insertBefore(element,null);
    });
}

const openTab = (id, count) => {
  for (let i=0; i<=count; i++){
    const tab = document.getElementById(`tab-${i}`)
    const navTab = document.getElementById(`nav-tab-${i}`)
    if (i == id){
      tab.style.display='block'
      navTab.classList.add('active')
    }
    else{
      tab.style.display='none'
      navTab.classList.remove('active')
    }
  }
}