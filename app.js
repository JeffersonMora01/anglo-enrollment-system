// ─── Helpers ──────────────────────────────────────────────────────────────────

const params = new URLSearchParams(window.location.search);

const promoter = params.get('promoter');

console.log(promoter);

const v = id => document.getElementById(id)?.value?.trim() || '';

function fmtDate(iso) {
  if (!iso) return '___________';
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}

function numToWords(n) {
  const map = {
    15000: 'Quince mil colones',
    20000: 'Veinte mil colones',
    50000: 'Cincuenta mil colones',
    5000: 'Cinco mil colones',
  };
  return map[n] || `${Number(n).toLocaleString('es-CR')} colones`;
}

function fmtMoney(n) {
  if (!n) return '________';
  return `₡${Number(n).toLocaleString('es-CR')}`;
}

function checkbox(checked) {
  return `<span class="doc-checkbox">${checked ? 'X' : '&nbsp;'}</span>`;
}

function field(val, minWidth) {
  const style = minWidth ? `min-width:${minWidth}` : '';
  return `<span class="doc-field" style="${style}">${val || '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'}</span>`;
}

function getDateParts(iso) {
  if (!iso) return { d: '__', m: '__', y: '____' };
  const [y, m, d] = iso.split('-');
  return { d, m, y };
}

function monthName(iso) {
  if (!iso) return '_______';
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  return months[parseInt(iso.split('-')[1]) - 1];
}

// ─── Main generate ────────────────────────────────────────────────────────────

function generate() {
  const data = {
    studentName: v('f_student_name'),
    birthDate: v('f_birth_date'),
    studentId: v('f_student_id'),
    workPhone: v('f_work_phone'),
    cellPhone: v('f_cell_phone'),
    email: v('f_email'),
    occupation: v('f_occupation'),
    studyCenter: v('f_study_center'),
    company: v('f_company'),
    adaptation: v('f_adaptation'),
    adaptationDetail: v('f_adaptation_detail'),
    guardianName: v('f_guardian_name'),
    guardianId: v('f_guardian_id'),
    guardianPhone: v('f_guardian_phone'),
    courseName: v('f_course_name'),
    duration: v('f_duration'),
    startDate: v('f_start_date'),
    schedule: v('f_schedule'),
    location: v('f_location'),
    address: v('f_address'),
    numPayments: v('f_num_payments'),
    paymentAmount: v('f_payment_amount'),
    firstPayment: v('f_first_payment'),
    paymentMethod: v('f_payment_method'),
    discount: v('f_discount'),
    regFee: v('f_reg_fee'),
    materialFee: v('f_material_fee'),
    monthly: v('f_monthly'),
    books: v('f_books'),
    paymentDate: v('f_payment_date'),
  };

  const dp = getDateParts(data.startDate);
  const fp = getDateParts(data.paymentDate);

  const html = `
    <!-- ══ ADMISIÓN ══ -->
    <div class="doc-header">
      <div>ANGLO AMERICAN INSTITUTE OF LANGUAGES</div>
      <div>Cédula Jurídica: 3-102-771534</div>
      <div>Av. 0 Calle 1ra, Edificio Alde S.A, Piso 6, San José, Costa Rica &nbsp; Tel: 2100-4377</div>
      <div>FÓRMULA DE ADMISIÓN PROGRAMA CR-BILINGÜE</div>
    </div>

    <div class="doc-row">
      <span class="doc-label">Nombre Completo del alumno (a):</span>
      ${field(data.studentName, '220px')}
    </div>

    <div class="doc-row">
      <span class="doc-label">Fecha de nacimiento:</span> ${field(fmtDate(data.birthDate))}
      <span class="doc-label">Cédula:</span> ${field(data.studentId)}
      <span class="doc-label">Tel. Trabajo:</span> ${field(data.workPhone)}
      <span class="doc-label">Cel:</span> ${field(data.cellPhone)}
    </div>

    <div class="doc-row">
      <span class="doc-label">E-mail:</span> ${field(data.email, '160px')}
      <span class="doc-label">Ocupación:</span> ${field(data.occupation)}
      <span class="doc-label">Centro de estudios:</span> ${field(data.studyCenter, '120px')}
    </div>

    <div class="doc-row">
      <span class="doc-label">Nombre de la empresa:</span> ${field(data.company)}
      <span class="doc-label">Adecuación Curricular:</span>
      <span>SI</span> ${checkbox(data.adaptation === 'SI')}
      <span>NO</span> ${checkbox(data.adaptation === 'NO')}
      <span class="doc-label">(especifique):</span> ${field(data.adaptationDetail, '100px')}
    </div>

    <div class="doc-row" style="margin-top:4px">
      <span class="doc-label">Nombre del encargado legal:</span> ${field(data.guardianName, '180px')}
      <span class="doc-label">Cédula:</span> ${field(data.guardianId)}
      <span class="doc-label">Teléfono:</span> ${field(data.guardianPhone)}
    </div>

    <div class="doc-row">
      <span class="doc-label">Fecha de inicio de clases:</span> ${field(fmtDate(data.startDate))}
      <span class="doc-label">Horario:</span> ${field(data.schedule, '120px')}
    </div>

    <div class="doc-row">
      <span class="doc-label">Lugar:</span> ${field(data.location)}
      <span class="doc-label">Forma de pago mediante:</span> ${field(data.numPayments)}
      <span class="doc-label">Pagos de ₡:</span> ${field(data.paymentAmount ? Number(data.paymentAmount).toLocaleString('es-CR') : '')}
      <span class="doc-label">cada uno, cada 4 semanas.</span>
    </div>

    <div class="doc-row">
      <span class="doc-label">Dirección:</span> ${field(data.address, '160px')}
      <span class="doc-label">Fecha de primer pago:</span> ${field(fmtDate(data.firstPayment))}
    </div>

    <!-- CONDITIONS -->
    <div class="doc-section-title">LEA CUIDADOSAMENTE LAS CONDICIONES DE LA CAPACITACIÓN</div>

    <div style="line-height:1.20; column-count:2; column-gap:28px; text-align:justify;">
    
        <div class="doc-row" style="margin-bottom:2px; break-inside:avoid;">
      <span>1. El curso matriculado, corresponde al siguiente:</span>
      <strong>${field(data.courseName ? 'Curso ' + data.courseName : '')}</strong>
      <span>con una duración de</span>
      <strong>${field(data.duration)}</strong>
      <span>semanas.</span>
    </div>

    <p style="margin:1px 0; break-inside:avoid;">
      2. La nota mínima para aprobar el nivel será de setenta <strong>(70)</strong>, dentro de la escala de 1 a 100. Bajo este supuesto, se emitirá un certificado.
    </p>

    <p style="margin:1px 0; break-inside:avoid;">
      3. El material didáctico básico podrá ser solicitado por el estudiante entre la primera y segunda lección, únicamente cancelando al encargado de sede pago por adelantado. El material será entregado en la próxima lección.
    </p>

    <p style="margin:1px 0; break-inside:avoid;">
      4. Se realizarán exámenes para evaluar el avance de cada alumno, en cuyo caso, con anticipación debida y por medio de una circular, éste conocerá las respectivas fechas.
    </p>

    <p style="margin:1px 0; break-inside:avoid;">
      5. Si por causa injustificada, el alumno no realizó alguna prueba, sea parcial o final, podrá solicitar su reposición, cancelando un arancel de tres mil colones.
    </p>

    <p style="margin:1px 0; break-inside:avoid;">
      6. Cuatro ausencias injustificadas se tomarán como causa de retiro, no obstante, el saldo adeudado por clases deberá ser cancelado.
    </p>

    <p style="margin:1px 0; break-inside:avoid;">
      7. Los pagos relacionados con el presente curso (mensualidades, recargo, reposición de exámenes, material didáctico, certificados, constancias y certificaciones) se realizan en la sede respectiva; o bien por medio de SINPE al 7205-1035 a nombre del director académico GARY MORA, salvo el derecho de matrícula, el cual puede cobrarse a domicilio, por medio de un funcionario debidamente identificado. Cada alumno conocerá con antelación las fechas de pago.
    </p>

    <p style="margin:1px 0; break-inside:avoid;">
      8. Eventualmente puede haber cambio del instructor profesional, fusión de horarios o reubicación de alumnos, cuando así lo amerite la institución.
    </p>

    <p style="margin:1px 0; break-inside:avoid;">
      9. Si por alguna razón la persona que ha realizado el trámite de matrícula posteriormente no puede asistir al curso, podrá transferir el derecho de matrícula a un tercero, o bien aplicar el monto al pago de mensualidad. El trámite deberá hacerse por escrito, caso contrario se perderá este derecho.
    </p>

    <div class="doc-row" style="margin:1px 0; break-inside:avoid;">
      <span>10. La inversión en el presente curso, con la aplicación del descuento será de:</span>
      ${field(data.discount)}
      <span>desglosado de la siguiente forma:</span>
      <span>Derecho de matrícula:</span> ${field(fmtMoney(data.regFee))}
      <span>Material didáctico:</span> ${field(fmtMoney(data.materialFee))}
      <span>Mensualidad:</span> ${field(fmtMoney(data.monthly))}
      <span>Certificado:</span> ${field(fmtMoney(data.books))} (Sujeto a aprobación del curso) Hoy esta cancelando el derecho de matrícula.
    </div>

    <p style="margin:1px 0; break-inside:avoid;">
      11. Código de Vestimenta: Se exigirá a los estudiantes asistir con vestimenta apropiada, no se podrá asistir con escotes muy pronunciados, vestidos muy cortos, croptop, y en caso de hombres, no se podrá asistir con camisa de tirantes ni gorras.
    </p>

    </div>

    <!-- SIGNATURES -->
    <div class="sig-grid">
      <div><div class="sig-line text-center">${promoter}</div><div class="sig-label">Representante</div></div>
      <div><div class="sig-line text-center"> ${data.studentName || ''}</div><div class="sig-label">Nombre del encargado o estudiante</div></div>
      <div><div class="sig-line"></div><div class="sig-label">Firma del alumno o encargado</div></div>
    </div>

    <!-- ══ COMPROBANTE ══ -->
    <div class="doc-divider"></div>

    <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:8px;">
      <div>
        <div style="font-weight:700; line-height:1.6">
          ANGLOAMERICAN INSTITUTE OF LANGUAGES<br>COMPROBANTE DE MATRÍCULA
        </div>
        <div class="doc-row" style="margin-top:10px">
          <span class="doc-label">Recibimos de:</span>
          ${field(data.studentName, '180px')}
        </div>
      </div>
      <table style="border-collapse:collapse; text-align:center; font-size:10px;">
        <tr>
          <th style="border:1px solid #000; padding:2px 10px">Día</th>
          <th style="border:1px solid #000; padding:2px 10px">Mes</th>
          <th style="border:1px solid #000; padding:2px 10px">Año</th>
        </tr>
        <tr>
          <td style="border:1px solid #000; padding:4px 10px">${fp.d || '__'}</td>
          <td style="border:1px solid #000; padding:4px 10px">${fp.m || '__'}</td>
          <td style="border:1px solid #000; padding:4px 10px">${fp.y || '____'}</td>
        </tr>
      </table>
    </div>

    <div class="doc-row" style="margin-top:6px; flex-wrap:wrap">
      <span class="doc-label">La suma de (en letras):</span>
      ${field(data.regFee ? numToWords(data.regFee) : '', '200px')}
      <span class="doc-label">Colones ₡:</span>
      <span style="border-bottom:1px solid #000; min-width:80px; display:inline-block; text-align:center">${data.regFee ? Number(data.regFee).toLocaleString('es-CR') : ''}</span>
    </div>

    <div class="doc-row" style="margin-top:4px; flex-wrap:wrap">
      <span class="doc-label">Por concepto de:</span>
      ${field('Cancelación de matrícula', '160px')}
      <span style="margin-left:10px">Efectivo ${checkbox(data.paymentMethod === 'Efectivo')}</span>
      <span>SINPE ${checkbox(data.paymentMethod === 'SINPE')}</span>
      <span>Transferencia ${checkbox(data.paymentMethod === 'Transferencia')}</span>
    </div>

    <div class="sig-grid-2">
      <div><div class="sig-line text-center">${promoter}</div><div class="sig-label">Representante de Angloamerican</div></div>
      <div><div class="sig-line"></div><div class="sig-label">Firma del alumno o encargado</div></div>
    </div>
  `;

  document.getElementById('preview-wrapper').innerHTML = html;
}

// ─── Event listeners ──────────────────────────────────────────────────────────

document.getElementById('panel').addEventListener('input', generate);
document.getElementById('panel').addEventListener('change', generate);


async function saveToDrive(pdfBlob, studentName) {

  try {

    const base64 = await blobToBase64(pdfBlob);

    await fetch(
      'TU_WEBAPP_URL',
      {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          promoter,
          studentName,
          pdfBase64: base64
        })
      }
    );

    console.log('PDF subido');

  } catch (error) {

    console.error(error);

  }

}

async function handlePrint() {

  const btn = document.getElementById('btn-print');

  btn.disabled = true;
  btn.innerText = 'Generando PDF...';

  try {

    const studentName = v('f_student_name') || 'matricula';

    const element = document.getElementById('preview-wrapper');

    // 🔥 CLONAR CONTENIDO
    const clone = element.cloneNode(true);

    clone.style.width = '816px';
    clone.style.minHeight = '1056px';
    clone.style.background = '#fff';
    clone.style.padding = '24px';

    clone.style.position = 'fixed';
    clone.style.left = '-99999px';
    clone.style.top = '0';

    clone.style.display = 'block';
    clone.style.visibility = 'visible';
    clone.style.opacity = '1';

    document.body.appendChild(clone);

    const opt = {
      margin: 0,
      filename: `${studentName}.pdf`,
      image: {
        type: 'jpeg',
        quality: 1
      },
      html2canvas: {
        scale: 3,
        useCORS: true,
        backgroundColor: '#ffffff'
      },
      jsPDF: {
        unit: 'px',
        format: [816, 1056],
        orientation: 'portrait'
      }
    };

    // ⏳ esperar render
    await new Promise(resolve => setTimeout(resolve, 500));

    const worker = html2pdf()
      .set(opt)
      .from(clone, 'element');

    const pdfBlob = await worker.outputPdf('blob');

    document.body.removeChild(clone);

    // ☁️ subir a drive
    await saveToDrive(pdfBlob, studentName);

    btn.innerText = 'PDF Guardado ✓';

    // 🖨️ imprimir
    window.print();

  } catch (error) {

    console.error(error);

    btn.innerText = 'Error al generar PDF';

  } finally {

    setTimeout(() => {

      btn.disabled = false;
      btn.innerText = 'Imprimir / Guardar PDF';

    }, 2500);

  }

}

async function saveToDrive(pdfBlob, studentName) {

  try {

    const base64 = await blobToBase64(pdfBlob);

    await fetch(
      'https://script.google.com/macros/s/AKfycbzFZL_46r8QUp4BFLmsB9HLK4eQAwFEE9cGdpRNBZYLtRf0-GNx6LPA0uSwGvXyAr4/exec',
      {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          promoter,
          studentName,
          pdfBase64: base64
        })
      }
    );

    console.log('PDF subido');

  } catch (error) {

    console.error(error);

  }

}

function blobToBase64(blob) {

  return new Promise((resolve, reject) => {

    const reader = new FileReader();

    reader.onloadend = () => {

      resolve(reader.result.split(',')[1]);

    };

    reader.onerror = reject;

    reader.readAsDataURL(blob);

  });

}