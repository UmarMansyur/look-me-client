<template>
  <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
    <i data-feather="bell" class="noti-icon"></i>
    <span class="badge bg-danger rounded-circle noti-icon-badge">9</span>
  </a>
  <div class="dropdown-menu dropdown-menu-end dropdown-lg">
    <div class="dropdown-item noti-title">
      <h5 class="m-0">
        <span class="float-end">
          <a href="#" class="text-dark">
            <small>Hapus Semua</small>
          </a>
        </span>Notifikasi
      </h5>
    </div>
    <div class="noti-scroll" data-simplebar>
      <a href="javascript:void(0);" class="dropdown-item notify-item text-muted link-primary active">
        <div class="notify-icon">
          <img src="/assets/images/users/user-12.jpg" class="img-fluid rounded-circle" alt="" />
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <p class="notify-details">Muhammad Umar Mansyur</p>
          <small class="text-muted">5 min ago</small>
        </div>
        <p class="mb-0 user-msg">
          <small class="fs-14">
            Completed
            <span class="text-reset">Improve workflow in Figma</span>
          </small>
        </p>
      </a>
    </div>
    <a href="javascript:void(0);" class="dropdown-item text-center text-primary notify-item notify-all">
      Lihat Semua
      <i class="fe-arrow-right"></i>
    </a>

  </div>
</template>