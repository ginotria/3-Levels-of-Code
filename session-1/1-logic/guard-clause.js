// avoid nested if .. else logic

function isUserSuperAdmin(user) {
    if (user.role == 'admin') {
        if (user.position = 'senior manager') {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

// guard clause
function isUserSuperAdmin(user) {
    if (user.role != 'admin') return false
    if (user.position != 'senior manager') return false
    return true
}

//self documenting code
function userHasAdminRole(user) {
    return (user.role == 'admin');
}

function userIsSeniorManager(user) {
    return (user.position == 'senior manager');
}

function isUserSuperAdmin(user) {
    return (userHasAdminRole(user) && userIsSeniorManager(user))
}
