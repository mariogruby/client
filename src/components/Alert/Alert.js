export default function Alert({text, strong, success}){
    return (
 <div className="container d-flex justify-content-center">
    <div class={`alert-pareja container alert alert-dismissible fade show ${success ? "alert-success" : "alert-warning"}`} role="alert">
    <strong>{strong ? strong : "Hey!"}</strong>{text}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  </div>
    )
}
