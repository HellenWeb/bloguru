<template>
    <div>
        <section class="vh-100 gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="ok card bg-dark text-white" style="border-radius: 1rem;">
                    <div class="card-body p-4 text-center">
                        <div class="mb-md-4 mt-md-4 pb-5">
                        <h4 class="fw-bold mb-2 text-uppercase">Login</h4>
                        <p class="text-white-50 mb-5">Please enter your login and password!</p>
                        <div class="form-outline form-white mb-4">
                            <input v-model="email" name="email" type="email" placeholder="Email..." id="typeEmailX" class="fs-6 form-control form-control-lg" />
                        </div>
                        <div class="form-outline form-white mb-4">
                            <input v-model="password" name="password" type="password" placeholder="Password..." id="typePasswordX" class="fs-6 form-control form-control-lg" />
                        </div>
                        <div class="form-outline form-white mb-4">
                            <input v-model="name" name="name" type="name" placeholder="Name..." id="typePasswordX" class="fs-6 form-control form-control-lg" />
                        </div>
                        <p class="small pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                        <div class="">
                            <button @click.prevent="login" class="btn btn-outline-light btn-lg px-5 m-3" type="submit">Login</button>
                            <button @click.prevent="sign_up" class="btn btn-outline-light btn-lg px-5" type="submit">Sign Up</button>
                        </div>
                        </div>
                        <div>
                        <p>Copyright by. HellenWeb</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import store from '@/store/index'
export default {
  name: 'MyLogin',
  data () {
    return {
      IsLoading: false,
      API_URL: 'http://127.0.0.1:8000',
      email: '',
      password: '',
      name: '',
      error: null,
      user: null
    }
  },
  methods: {
    sign_up (ev) {
      ev.preventDefault()
      store.dispatch('sign_up', { email: this.email, password: this.password, name: this.name })
    },
    login (ev) {
      ev.preventDefault()
      store.dispatch('login', { email: this.email, password: this.password, name: this.name })
    }
  }
}
</script>
<style>
.ok {
    height: 50%;
    font-size: 15px;
    margin-bottom: 5px;
}
.gradient-custom {
    /* fallback for old browsers */
    background: #6a11cb;

    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));

    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
}
</style>
